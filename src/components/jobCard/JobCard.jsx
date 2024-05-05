import React, { useState } from 'react'
import Badge from '../Badge/Badge'
import Joblogo from '../../assets/job-logo.jpg'
import Profile from '../../assets/profile.jpg'

function JobCard() {
    const [readMore, setReadMore] = useState(false);
    return (
        <>
            <div className='w-[25rem] h-auto border rounded-[20px] px-[1rem] py-[1.5rem]'>
                <div><Badge /></div>
                <div className='flex py-4'>
                    <div className='pr-4'>
                        <img src={Joblogo} alt="" width={70} height={40} />
                    </div>
                    <div>
                        <h1 className='tracking-[2px] text-[1rem] font-medium text-slate-400'>fampay</h1>
                        <h1 className='text-[1rem] font-normal font-sans pb-1'>Backend Engineer</h1>
                        <h1 className='text-[0.8rem] font-medium font-sans'>Banglore</h1>
                    </div>
                </div>
                <div className='pb-4'>
                    <h1 className='text-[1rem] text-slate-600 font-medium font-sans pb-4'>Estimated Salary: ₹ 18 -35 LPA ✅</h1>
                    <h1 className='text-[1.1rem] font-medium font-sans'>About Company:</h1>
                    <h1 className='text-[1rem] font-semibold font-sans'>About us</h1>
                    <div className='relative font-light text-[1rem]'>
                        <p className={readMore ? '' : 'line-clamp-6'}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iste autem porro voluptatum, alias dolore. Voluptatem aliquid et magnam reiciendis natus, vel iusto illum blanditiis, distinctio repellendus maiores veritatis odio asperiores quidem impedit eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nulla! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint in, ullam minus reiciendis fuga itaque sed. Qui velit tenetur accusantium quia magnam rem, magni, ullam quo illo at autem. Officiis ipsum eligendi distinctio, doloremque aspernatur animi mollitia neque omnis? Minima ex expedita mollitia adipisci vel quaerat, nihil nam, tempore excepturi provident illo repudiandae ab necessitatibus corporis repellendus eum ipsam sint explicabo, nisi cumque quis porro! Praesentium natus soluta, assumenda perferendis itaque culpa, qui distinctio laborum voluptatum ipsa nobis quasi quas sunt iusto facilis explicabo pariatur unde quaerat molestiae? Beatae enim, inventore libero magnam iste asperiores perferendis? Earum sapiente quasi ea.
                        </p>
                        {!readMore && (
                            <button className="absolute top-[40%] left-0 h-[10rem] w-full text-[#7875E0] bg-gradient-to-b from-gray-200/10 via-white to-white" onClick={() => setReadMore(true)}>View job</button>
                        )}
                    </div>
                </div>
                <div className='pt-[5rem] pb-[1rem]'>
                    <h1 className='tracking-[.1rem] text-gray-400  text-[0.9rem] font-medium'>Minimum Experience</h1>
                    <h1 className='font-normal text-[0.9rem]'>2 years</h1>
                </div>
                <div className='flex flex-col gap-2'>
                    <button className='bg-[#55EFC2] text-[1rem] rounded-xl w-full p-3 font-medium'>⚡ Easy Apply</button>
                    <button className='flex px-[2rem] items-center bg-[#4842DA] text-[1rem] text-white font-[200] rounded-xl w-full p-3'><img src={Profile} className='rounded-full mr-2 opacity-70 w-[30px] h-[30px] blur-[1.5px]' width={40} height={45} alt='profile' /><img src={Profile} className='rounded-full mr-5 opacity-70 w-[30px] h-[30px] blur-[1.5px]' width={40} height={45} alt='profile' />Unlock referral asks</button>

                </div>
            </div>
        </>
    )
}

export default JobCard