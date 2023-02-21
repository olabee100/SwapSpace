import React from 'react';
import Courses from '../../assets/School/images/top5Courses.png';
import Countries from '../../assets/School/images/top5Countries.png';
import Colleges from '../../assets/School/images/top5Schools.png'
import { top5Colleges, top5Countries, top5Courses } from '../../utils/top5Lists';

const Top5Stats = () => {
    const colours = ['#705FFF','#1ACFB0', '#F84B77', '#4E49A5', '#E64421']
  return (
    <div className='w-full text-white bg-[#0D2C58] my-20 py-16'>
        <div className='w-[80%] mx-auto'>
            <div className='w-[55%] xl:w-[45%]'>
                <p className='font-semibold text-xl text-center'>Top 5 courses</p>
                <div className='flex pt-4'>
                    <img src={Courses} alt="" className='w-[40%] mr-10' />
                    <ul className='uppercase tracking-wider flex flex-col gap-3'>
                        {top5Courses.map((item, index) => {
                            const bgColor = colours[index];
                            return(
                                <li key={index} className='flex items-center'><span className='mr-3 w-[11px] h-[11px] rounded-[50%] inline-block' style={{backgroundColor: `${bgColor}`}}>&nbsp;</span>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className='w-[55%] xl:w-[45%] float-right'>
                <p className='font-semibold text-xl text-center'>Top 5 colleges</p>
                <div className='flex pt-4'>
                    <ul className='uppercase tracking-wider flex flex-col gap-3'>
                        {top5Colleges.map((item, index) => {
                            const bgColor = colours[index];
                            return(
                                <li key={index} className='flex items-center'><span className='mr-3 w-[11px] h-[11px] rounded-[50%] inline-block' style={{backgroundColor: `${bgColor}`}}>&nbsp;</span>{item}</li>
                            )
                        })}
                    </ul>
                    <img src={Colleges} alt="" className='w-[40%] ml-10' />
                </div>
            </div>

            <div className='w-[55%] xl:w-[40%] pt-[30%] xl:pt-[25%]'>
                <p className='font-semibold text-xl text-center'>Top 5 countries</p>
                <div className='flex pt-4'>
                    <img src={Countries} alt="" className='w-[40%] mr-10' />
                    <ul className='uppercase tracking-wider flex flex-col gap-3'>
                        {top5Countries.map((item, index) => {
                            const bgColor = colours[index];
                            return(
                                <li key={index} className='flex items-center'><span className='mr-3 w-[11px] h-[11px] rounded-[50%] inline-block' style={{backgroundColor: `${bgColor}`}}>&nbsp;</span>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Top5Stats