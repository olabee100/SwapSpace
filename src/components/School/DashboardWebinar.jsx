import React, {useState} from 'react';
import { upcomingWebinars, pastWebinars } from '../../utils/dashboardWebinar';
import DashWebinarItem from './DashWebinarItem';

const DashboardWebinar = () => {
    const [items, setItems] = useState(upcomingWebinars);
    const [active, setActive] = useState('Upcoming');

    const filterPastItem = () => {
        setItems(pastWebinars);
        setActive('Past')
    }
    const filterUpcomingItem = () => {
        setItems(upcomingWebinars);
        setActive('Upcoming')
    }

  return (
    <div className='py-10 w-[95%] lg:w-[80%] mx-auto'>
        <h3 className='text-xl font-bold pb-3 uppercase'>Webinar</h3>

        <div className="py-7 ">
            <ul className='flex justify-between w-[100%] font-bold md:w-[40%] leading-4 text-sm md:text-lg'>
                <li>
                   <a href="/school/dashboard/webinar/past"> <button 
                        onClick={() => filterPastItem()}
                        className={active === 'Past' ? 'text-[#0D2C58] border-spacing-4 border-b-4 border-[#0D2C58]' : 'text-black'}
                    >
                    Past
                    </button></a>
                </li>
                <li>
                 <a href="/school/dashboard/webinar/upcoming">   <button 
                        onClick={() => filterUpcomingItem()}
                        className={active === 'Upcoming' ? 'text-[#0D2C58] border-spacing-4 border-b-4 border-[#0D2C58]' : 'text-black'}
                    >
                    Upcoming
                    </button></a>
                </li>
            </ul>
        </div>

        <div className='flex flex-wrap gap-16'>
            {items.map((items) => <DashWebinarItem key={items.id} {...items}/>)}
        </div>
    </div>
  )
}

export default DashboardWebinar