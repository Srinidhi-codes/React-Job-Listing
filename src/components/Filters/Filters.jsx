import React from 'react';

function Filters() {
    return (
        <>
            <div className='flex gap-x-10 p-[2rem]'>
                <div className='relative'>
                    <select className='w-[10rem] h-[2.5rem] text-[0.8rem] text-gray-400 border rounded-md pr-4 outline-none'>
                        <option value="" disabled selected>Min Experience</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <div className='absolute top-[20%] left-[8rem] h-[1.5rem] bg-slate-300 w-px'></div>
                </div>
                <div className='relative'>
                    <select className='w-[10rem] h-[2.5rem] text-[0.8rem] text-gray-400 border rounded-md pr-4 outline-none'>
                        <option value="" disabled selected>Location</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <div className='absolute top-[20%] left-[7.5rem] h-[1.5rem] bg-slate-300 w-px'></div>
                </div>
                <div className='relative'>
                    <select className='w-[10rem] h-[2.5rem] text-[0.8rem] text-gray-400 border rounded-md pr-4 outline-none'>
                        <option value="" disabled selected>Job type</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <div className='absolute top-[20%] left-[7.5rem] h-[1.5rem] bg-slate-300 w-px'></div>
                </div>
                <div className='relative'>
                    <select className='w-[10rem] h-[2.5rem] text-[0.8rem] text-gray-400 border rounded-md pr-4 outline-none'>
                        <option value="" disabled selected>Tech Stack</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <div className='absolute top-[20%] left-[7.5rem] h-[1.5rem] bg-slate-300 w-px'></div>
                </div>
                <div className='relative'>
                    <select className='w-[10rem] h-[2.5rem] text-[0.8rem] text-gray-400 border rounded-md pr-4 outline-none'>
                        <option value="" disabled selected>Role</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <div className='absolute top-[20%] left-[7.5rem] h-[1.5rem] bg-slate-300 w-px'></div>
                </div>
                <div className='relative'>
                    <select className='w-[10rem] h-[2.5rem] text-[0.8rem] text-gray-400 border rounded-md pr-4 outline-none'>
                        <option value="" disabled selected>Min Base Pay</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <div className='absolute top-[20%] left-[7.5rem] h-[1.5rem] bg-slate-300 w-px'></div>
                </div>
                <input type='text' placeholder='Search Company Name' className='w-[15rem] h-[2.5rem] text-[0.8rem] text-gray-400 border rounded-md pr-4 outline-none p-2' />
            </div>
        </>
    );
}

export default Filters;
