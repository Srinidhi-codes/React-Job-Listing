import React, { useState, useEffect } from 'react';
import Badge from '../Badge/Badge';
import Profile from '../../assets/profile.jpg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setJobList } from '../../redux/jobSlice';
import JobModal from '../modal/Modal';
import Filters from '../Filters/Filters';

function JobCard() {
    const [id, setId] = useState({});
    const [jobData, setJobData] = useState([]);
    const [open, setOpen] = useState(false);
    const [limit, setLimit] = useState(10);
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [minExp, setMinExp] = useState(0);
    const [minBasePay, setMinBasePay] = useState(0);
    const [location, setLocation] = useState('');
    const dispatch = useDispatch();
    const { job } = useSelector((state) => state.job);
    const toggleReadMore = (index) => {
        setOpen(true);
        setId(index);
    };

    useEffect(() => {
        const onScroll = () => {
            if (window.innerHeight + window.scrollY >= window.document.body.offsetHeight - 30) {
                setLimit(limit + 10); // Increase limit when scrolled to the bottom
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [limit]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                const body = JSON.stringify({
                    "limit": limit,
                    "offset": 0
                });

                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body
                };
                const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
                const data = await response.json();
                setJobData(data.jdList);
                dispatch(setJobList(data.jdList));
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()
    }, [limit, dispatch])
    return (
        <>
            <Filters jobList={job} setMinExp={setMinExp} setLocation={setLocation} setRole={setRole} setName={setName} name={name} setMinBasePay={setMinBasePay} />
            {open && <JobModal open={open} setOpen={setOpen} jobDesc={job} index={id} />}
            <div className='flex justify-center items-center flex-wrap gap-5 px-8'>
                {jobData?.filter(data =>
                    (role === '' || data?.jobRole === role) &&
                    (minBasePay === 0 || data?.minJdSalary >= minBasePay) &&
                    (location === '' || data?.location === location) &&
                    (minExp === 0 || data?.minExp === minExp))?.map((data, index) => <div key={index} className='w-[25rem] h-auto border rounded-[20px] px-[1rem] py-[1.5rem]' >
                        <div><Badge /></div>
                        <div className='flex py-4'>
                            <div className='pr-4'>
                                <img src={data?.logoUrl} className='rounded-lg' alt="" width={70} height={40} />
                            </div>
                            <div>
                                <h1 className='tracking-[2px] text-[1rem] font-medium text-slate-400'>{data?.companyName}</h1>
                                <h1 className='text-[1rem] font-normal font-sans pb-1 capitalize'>{data?.jobRole}</h1>
                                <h1 className='text-[0.8rem] font-medium font-sans capitalize'>{data?.location}</h1>
                            </div>
                        </div>
                        <div className='pb-4'>
                            <h1 className='text-[1rem] text-slate-600 font-medium font-sans pb-4'>Estimated Salary: {data?.salaryCurrencyCode === 'USD' && '$'} {data?.minJdSalary || 0} - {data?.maxJdSalary || 0} LPA ✅</h1>
                            <h1 className='text-[1.1rem] font-medium font-sans'>About Company:</h1>
                            <h1 className='text-[1rem] font-semibold font-sans'>About us</h1>
                            <div className='relative font-light text-[1rem]'>
                                <p className={id[data?.jdUid] ? '' : 'line-clamp-6'}>
                                    {data?.jobDetailsFromCompany}
                                </p>
                                {!id[data?.jdUid] && (
                                    <button className="absolute top-[40%] font-medium left-0 h-[10rem] w-full text-[#7875E0] bg-gradient-to-b from-gray-200/10 via-white to-white" onClick={() => toggleReadMore(index)}>View job</button>
                                )}
                            </div>
                        </div>
                        <div className='pt-[5rem] pb-[1rem]'>
                            <h1 className='tracking-[.1rem] text-gray-400  text-[0.9rem] font-medium'>Minimum Experience</h1>
                            <h1 className='font-normal text-[0.9rem]'>{data?.minExp || 0} years</h1>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Link to={data?.jdLink} target='_blank' className='bg-[#55EFC2] text-[1rem] rounded-xl w-full p-3 text-center font-medium'>⚡ Easy Apply</Link>
                            <button className='flex px-[2rem] items-center bg-[#4842DA] text-[1rem] text-white font-[200] rounded-xl w-full p-3'><img src={Profile} className='rounded-full mr-2 opacity-70 w-[30px] h-[30px] blur-[1.5px]' width={40} height={45} alt='profile' /><img src={Profile} className='rounded-full mr-5 opacity-70 w-[30px] h-[30px] blur-[1.5px]' width={40} height={45} alt='profile' />Unlock referral asks</button>
                        </div>
                    </div >)
                }
            </div>
        </>
    );
}

export default JobCard;