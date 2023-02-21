import React, { useState, useMemo } from 'react'
import { applicationData } from '../../../utils/applicationData';
import TableRow from '../UI/TableRow';

const Applications = () => {
    const [selectedCategory, setSelectedCategory] = useState();

    const getFilteredCategory = () => {
        if (!selectedCategory) {
          return applicationData;
        }
        return applicationData.filter((item) => item.status === selectedCategory);
    }
    
    const filteredList = useMemo(getFilteredCategory, [selectedCategory]);

  return (
    <>
        <div className='pt-[47px] w-[25%] xl:w-[20%] mx-auto'>
                <button className='px-5 py-2 bg-[#0d2c58] text-white rounded-lg'>Create New Application</button>
        </div>

        <div className='pt-[20px] w-[80%] mx-auto'>

            <div className='flex  justify-between py-9'>
                <h3 className='text-2xl font-medium'>All Applications</h3>
                    <div className="flex items-center gap-2 font-medium">
                        <div >Filter:</div>
                        <div>
                            <select
                            name="category-list"
                            id="category-list"
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                            <option value="">All</option>
                            <option value="Accepted">Accepted</option>
                            <option value="Rejected">Rejected</option>
                            <option value="Pending">Pending</option>
                            </select>
                        </div>
                    </div>
            </div>

            <div className='overflow-x-auto relative  sm:rounded-lg border-t '>
                <table className='w-full text-sm text-left mt-4'>
                    <thead className='uppercase'>
                    <tr>
                        <th scope="col" className="py-3 px-2 xl:px-6">
                            Name
                        </th>
                        <th scope="col" className="py-3 px-2 xl:px-6">
                            I.D
                        </th>
                        <th scope="col" className="py-3 px-2 xl:px-6">
                            Gender
                        </th>
                        <th scope="col" className="py-3 px-2 xl:px-6">
                            School
                        </th>
                        <th scope="col" className="py-3 px-2 xl:px-6">
                            Course
                        </th>
                        <th scope="col" className="py-3 px-2 xl:px-6">
                            Status
                        </th>
                        <th scope="col" className="py-3 px-2 xl:px-6">
                            Managed By
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredList.map((item, index) => <TableRow key={index} index={index} id={item.id} name={item.name} school={item.school} gender={item.gender} course={item.course} status={item.status} manager={item.manager} img={item.img} />)}
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Applications