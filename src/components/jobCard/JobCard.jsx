import React, { useState, useEffect } from 'react';
import Badge from '../Badge/Badge';
import Profile from '../../assets/profile.jpg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setJobList } from '../../redux/jobSlice'
import JobModal from '../modal/JobModal';
import Filters from '../Filters/Filters';
import './jobCard.css'
function JobCard() {
    const [open, setOpen] = useState(false);
    const [limit, setLimit] = useState(12);
    const [id, setId] = useState({});
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
                setLimit(limit + 10);
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
                dispatch(setJobList(data.jdList));
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()
    }, [limit, dispatch])

    const filters = [
        (data) => (name === '' || data.companyName.toLowerCase().includes(name.toLowerCase())),
        (data) => (role === '' || data.jobRole === role),
        (data) => (location === '' || data.location === location),
        (data) => (minExp === 0 || data.minExp == minExp),
        (data) => (minBasePay === 0 || data.minJdSalary == minBasePay)
    ];
    return (
        <>
            <Filters jobList={job} setMinExp={setMinExp} setLocation={setLocation} setRole={setRole} setName={setName} name={name} setMinBasePay={setMinBasePay} />
            {open && <JobModal open={open} setOpen={setOpen} jobDesc={job} index={id} />}
            <div className='card__wrapper'>
                {job?.filter(data => filters.every(filter => filter(data)))?.map((data, index) => <div key={index} className='card' >
                    <div><Badge /></div>
                    <div className='card__title__section'>
                        <div className='image__wrapper'>
                            <img src={data?.logoUrl} alt="" width={70} height={40} />
                        </div>
                        <div>
                            <h1 className='company__title'>{data?.companyName}</h1>
                            <h1 className='company__role'>{data?.jobRole}</h1>
                            <h1 className='company__location'>{data?.location}</h1>
                        </div>
                    </div>
                    <div className='company__wrapper'>
                        <h1 className='company__salary'>Estimated Salary: {data?.salaryCurrencyCode === 'USD' && '$'} {data?.minJdSalary || 0} - {data?.maxJdSalary || 0} LPA ✅</h1>
                        <h1 className='company__about'>About Company:</h1>
                        <h1 className='company__about__us'>About us</h1>
                        <div className='company__description__wrapper'>
                            <p className={id[data?.jdUid] ? '' : 'company__description'}>
                                {data?.jobDetailsFromCompany}
                            </p>
                            {!id[data?.jdUid] && (
                                <button className="view__job__btn bg-gradient-to-b from-gray-200/10 via-white to-white" onClick={() => toggleReadMore(index)}>View job</button>
                            )}
                        </div>
                    </div>
                    <div className='company__experience__wrapper'>
                        <h1 className='company__experience'>Minimum Experience</h1>
                        <h1 className='company__years'>{data?.minExp || 0} years</h1>
                    </div>
                    <div className='apply__btn__wrapper'>
                        <Link to={data?.jdLink} target='_blank' className='easy__apply'>⚡ Easy Apply</Link>
                        <button className='apply__referral'><img src={Profile} className='img1' width={40} height={45} alt='profile' /><img src={Profile} className='img2' width={40} height={45} alt='profile' />Unlock referral asks</button>
                    </div>
                </div >)
                }
            </div>
        </>
    );
}

export default JobCard;
