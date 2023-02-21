import React from 'react'
import { rejectedApplication } from '../../../utils/rejected'

const RejectedApplication = () => {
  return (
    <div className='pt-[130px] w-[80%] mx-auto'>
        <h3 className='font-medium text-3xl'>Rejected Applications</h3>
        <div className='pt-[60px]'>
            {rejectedApplication.map((item, index) => (
                <div key={index} className='border-2 border-[#002151] py-4 px-4 xl:py-8 xl:px-8 flex gap-2 mb-7 rounded-lg'>
                    <div className='w-3/12 flex flex-col items-center pt-8'>
                        <img src={item.img} alt="" className='rounded-full w-[130px] h-[130px] object-cover' />
                        <h3>{item.name}</h3>
                        <p className='text-xs'>{item.id}</p>
                        <p className='text-xs'>{item.course}</p>
                    </div>
                    <div className='w-9/12 flex justify-evenly gap-3'>
                        <div className='w-5/12 flex flex-col'>
                            <h3 className='w-full text-center bg-[#0D2C58] text-white text-semibold p-2 rounded-md'>Status</h3>
                            <p className='text-center items-center lg:mt-[30%] xl:mt-[30%] 2xl:mt-[20%] text-[#FF0000] text-2xl font-bold'>{item.status.toUpperCase()}</p>
                        </div>
                        <div className='w-5/12 flex flex-col gap-5'>
                            <h3 className='w-full text-center bg-[#0D2C58] text-white text-semibold p-2 rounded-md'>Reason</h3>
                            <p>{item.reason}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RejectedApplication