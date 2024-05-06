

function Filters(props) {
    const { jobList, setMinExp, setName, name, setLocation, setRole } = props
    const location = [...new Set(jobList.map(job => job.location))];
    const minBasePay = [...new Set(jobList.map(job => job.minJdSalary).filter(salary => salary !== null))].sort(function (a, b) { return a - b })
    const role = [...new Set(jobList.map(job => job.jobRole))];
    const minExperience = [...new Set(jobList.map(job => job.minExp).filter(exp => exp !== null))].sort(function (a, b) { return a - b })


    return (
        <>
            <div className='flex gap-x-10 p-[2rem] fixed top-0 bg-black/30 opacity-50 w-full'>
                <div className='relative'>
                    <select onChange={(e) => setMinExp(e.target.value)} className='w-[10rem] h-[2.5rem] text-[0.8rem] capitalize text-gray-400 border rounded-md pr-4 outline-none'>
                        <option value="" disabled selected>Min Experience</option>
                        {minExperience.map((data, index) => <option key={index} value={data}>{data}</option>)}
                    </select>
                    <div className='absolute top-[20%] left-[8rem] h-[1.5rem] bg-slate-300 w-px'></div>
                </div>
                <div className='relative'>
                    <select onChange={(e) => setLocation(e.target.value)} className='w-[10rem] h-[2.5rem] text-[0.8rem] capitalize text-gray-400 border rounded-md pr-4 outline-none'>
                        <option value="" disabled selected>Location</option>
                        {location.map((data, index) => <option key={index} value={data}>{data}</option>)}
                    </select>
                    <div className='absolute top-[20%] left-[7.5rem] h-[1.5rem] bg-slate-300 w-px'></div>
                </div>
                <div className='relative'>
                    <select className='w-[10rem] h-[2.5rem] text-[0.8rem] capitalize text-gray-400 border rounded-md pr-4 outline-none'>
                        <option value="" disabled selected>Job type</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <div className='absolute top-[20%] left-[7.5rem] h-[1.5rem] bg-slate-300 w-px'></div>
                </div>
                <div className='relative'>
                    <select className='w-[10rem] h-[2.5rem] text-[0.8rem] capitalize text-gray-400 border rounded-md pr-4 outline-none'>
                        <option value="" disabled selected>Tech Stack</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <div className='absolute top-[20%] left-[7.5rem] h-[1.5rem] bg-slate-300 w-px'></div>
                </div>
                <div className='relative'>
                    <select onChange={(e) => setRole(e.target.value)} className='w-[10rem] h-[2.5rem] text-[0.8rem] capitalize text-gray-400 border rounded-md pr-4 outline-none'>
                        <option value="" disabled selected>Role</option>
                        {role.map((data, index) => <option key={index} value={data}>{data}</option>)}
                    </select>
                    <div className='absolute top-[20%] left-[7.5rem] h-[1.5rem] bg-slate-300 w-px'></div>
                </div>
                <div className='relative'>
                    <select onChange={(e) => setMinExp(e.target.value)} className='w-[10rem] h-[2.5rem] text-[0.8rem] text-gray-400 border rounded-md pr-4 outline-none'>
                        <option value="" disabled selected>Min Base Pay</option>
                        {minBasePay.map((data, index) => <option key={index} value={data}>{data}</option>)}
                    </select>
                    <div className='absolute top-[20%] left-[7.5rem] h-[1.5rem] bg-slate-300 w-px'></div>
                </div>
                <input type='text' value={name} onChange={(e) => setName()} placeholder='Search Company Name' className='w-[15rem] h-[2.5rem] text-[0.8rem] text-gray-400 border rounded-md pr-4 outline-none p-2' />
            </div>
        </>
    );
}

export default Filters;
