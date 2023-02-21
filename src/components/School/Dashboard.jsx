import React from 'react';
import Banner from './Banner';
import DashboardWebinar from './DashboardWebinar';
import DashCommission from './DashCommission';
import DashFooter from './DashFooter';
import Top5Stats from './top5Stats';
import MyChart from './MyChart';
import Link from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='w-full'>
        <Banner />

        <div className='w-[30%] lg:w-[25%] xl:w-[20%] mx-auto mt-[10px]'>
           <a href="/school/signup"> <button className='px-5 py-2 bg-[#0d2c58] text-white rounded-lg'>Create New Application</button></a>
        </div>

        <div className="w-[80%] mx-auto">
          <div className='w-[40%] xl:w-[28%] float-right'>
            <h2 className='text-[#0d2c58] text-xl font-bold text-center pb-7'>Webinars</h2>
            <div className='flex gap-6'>   
              <div className="block w-[10rem] h-20 pl-8 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 relative" >
                  <h5 className="mb-2 text-[16px] tracking-tight text-gray-900 w-[40%]">Past Webinars</h5>
                  <p className="font-normal text-gray-700 absolute bottom-2 right-2">+20</p>
              </div>
              <div className="block w-[10rem] h-20 pl-8 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 relative" >
                  <h5 className="mb-2 text-[16px] tracking-tight text-gray-900 w-[40%]">Upcoming Webinars</h5>
                  <p className="font-normal text-gray-700 absolute bottom-2 right-2">+15</p>
              </div>
            </div>
          </div>
        </div>

        <MyChart />
        <Top5Stats />
        <DashboardWebinar />
        <DashCommission />
        <DashFooter />       
    </div>
  )
}

export default Dashboard