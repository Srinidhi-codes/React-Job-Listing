import React, { useState, useEffect } from 'react';
import Badge from '../Badge/Badge';
import Profile from '../../assets/profile.jpg';
import { Link } from 'react-router-dom';

function JobCard() {
    const [jobData, setJobData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                const body = JSON.stringify({
                    "limit": 10,
                    "offset": 0
                });

                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body
                };

                const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
                const result = await response.json();
                setJobData(result.jdList);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const [readMore, setReadMore] = useState(false);
    console.log(jobData, "data")

    return (
        <>
            <div className='flex justify-center items-center flex-wrap gap-x-5 px-8'>
                {jobData.map((job) => <div key={job.jdUid} className='w-[25rem] h-auto border rounded-[20px] px-[1rem] py-[1.5rem]' >
                    <div><Badge /></div>
                    <div className='flex py-4'>
                        <div className='pr-4'>
                            <img src={job.logoUrl} alt="" width={70} height={40} />
                        </div>
                        <div>
                            <h1 className='tracking-[2px] text-[1rem] font-medium text-slate-400'>{job.companyName}</h1>
                            <h1 className='text-[1rem] font-normal font-sans pb-1 capitalize'>{job.jobRole}</h1>
                            <h1 className='text-[0.8rem] font-medium font-sans'>Banglore</h1>
                        </div>
                    </div>
                    <div className='pb-4'>
                        <h1 className='text-[1rem] text-slate-600 font-medium font-sans pb-4'>Estimated Salary: ₹ {job.minJdSalary || 0} - {job.maxJdSalary || 0} LPA ✅</h1>
                        <h1 className='text-[1.1rem] font-medium font-sans'>About Company:</h1>
                        <h1 className='text-[1rem] font-semibold font-sans'>About us</h1>
                        <div className='relative font-light text-[1rem]'>
                            <p className={readMore ? '' : 'line-clamp-6'}>
                                {job.jobDetailsFromCompany}
                            </p>
                            {!readMore && (
                                <button className="absolute top-[40%] left-0 h-[10rem] w-full text-[#7875E0] bg-gradient-to-b from-gray-200/10 via-white to-white" onClick={() => setReadMore(true)}>View job</button>
                            )}
                        </div>
                    </div>
                    <div className='pt-[5rem] pb-[1rem]'>
                        <h1 className='tracking-[.1rem] text-gray-400  text-[0.9rem] font-medium'>Minimum Experience</h1>
                        <h1 className='font-normal text-[0.9rem]'>{job.minExp || 0} years</h1>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Link to={job.jdLink} target='_blank' className='bg-[#55EFC2] text-[1rem] rounded-xl w-full p-3 font-medium'>⚡ Easy Apply</Link>
                        <button className='flex px-[2rem] items-center bg-[#4842DA] text-[1rem] text-white font-[200] rounded-xl w-full p-3'><img src={Profile} className='rounded-full mr-2 opacity-70 w-[30px] h-[30px] blur-[1.5px]' width={40} height={45} alt='profile' /><img src={Profile} className='rounded-full mr-5 opacity-70 w-[30px] h-[30px] blur-[1.5px]' width={40} height={45} alt='profile' />Unlock referral asks</button>
                    </div>
                </div >)
                }
            </div>
        </>
    );
}

export default JobCard;
