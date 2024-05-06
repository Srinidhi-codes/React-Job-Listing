import './Filters.css'
function Filters(props) {

    const { jobList, setMinExp, setName, name, setLocation, setRole, setMinBasePay } = props

    // Sorting & Filtering the repeated value from Api for filter section
    const location = [...new Set(jobList.map(job => job.location))];
    const minBasePay = [...new Set(jobList.map(job => job.minJdSalary).filter(salary => salary !== null))].sort(function (a, b) { return a - b })
    const role = [...new Set(jobList.map(job => job.jobRole))];
    const minExperience = [...new Set(jobList.map(job => job.minExp).filter(exp => exp !== null))].sort(function (a, b) { return a - b })


    return (
        <>
            <div className='filterWrapper'>
                <div className='selectWrapper'>
                    <select onChange={(e) => setMinExp(e.target.value)}>
                        <option value="" disabled selected>Min Experience</option>
                        {minExperience.map((data, index) => <option key={index} value={data}>{data}</option>)}
                    </select>
                    <div className=''></div>
                </div>
                <div className='selectWrapper'>
                    <select onChange={(e) => setLocation(e.target.value)}>
                        <option value="" disabled selected>Location</option>
                        {location.map((data, index) => <option key={index} value={data}>{data}</option>)}
                    </select>
                    <div className='selectLine'></div>
                </div>
                <div className='selectWrapper'>
                    <select onChange={(e) => setRole(e.target.value)}>
                        <option value="" disabled selected>Role</option>
                        {role.map((data, index) => <option key={index} value={data}>{data}</option>)}
                    </select>
                    <div className='selectLine'></div>
                </div>
                <div className='selectWrapper'>
                    <select onChange={(e) => setMinBasePay(e.target.value)}>
                        <option value="" disabled selected>Min Base Pay</option>
                        {minBasePay.map((data, index) => <option key={index} value={data}>{data}</option>)}
                    </select>
                    <div className='selectLine'></div>
                </div>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Search Company Name' />
            </div>
        </>
    );
}

export default Filters;
