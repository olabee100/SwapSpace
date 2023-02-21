import React, {useState, useMemo} from 'react';
import { commissionData } from '../../../utils/commissionData';
import TableRow from '../UI/TableRow';

const Commisions = () => {
  const [selectedCategory, setSelectedCategory] = useState();

  const getFilteredCategory = () => {
    if (!selectedCategory) {
      return commissionData;
    }
    return commissionData.filter((item) => item.commission === selectedCategory);
  }

  const filteredList = useMemo(getFilteredCategory, [selectedCategory]);


  return (
    <div className='pt-[65px] xl:pt-[86px] w-full h-full'>
      <div className='w-[80%] mx-auto'>

        <div className='flex  justify-between pb-9'>
          <h3 className='text-2xl font-medium'>All Commissions</h3>
          <div className="flex items-center gap-2 font-medium">
            <div >Filter:</div>
            <div>
                <select
                  name="category-list"
                  id="category-list"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All</option>
                  <option value="Received">Received</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Pending">Pending</option>
                </select>
            </div>
          </div>
        </div>
          
        <div className='overflow-x-auto border-t '>
        
          <table className='w-full text-sm text-left mt-4'>
          <a href="/school/dashboard/studentprofile">
            <thead className='uppercase'>
              <tr>
                  <th scope="col" className="py-3 px-6">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    I.D
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Gender
                  </th>
                  <th scope="col" className="py-3 px-6">
                    School
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Course
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Commission
                  </th>
              </tr>
              
            </thead>
            <tbody>
              {filteredList.map((item, index) => <TableRow key={index} index={index} id={item.id} name={item.name} school={item.school} gender={item.gender} course={item.course} commission={item.commission} img={item.img} />)}
            </tbody>
            </a>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Commisions