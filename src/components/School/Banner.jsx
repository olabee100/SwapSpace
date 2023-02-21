import React from 'react'
import BannerBG from '../../assets/School/bannerBG.png'

const Banner = () => {
  return (
    <div className='pt-[107px] w-full h-full'>
        <div className='w-[95%] lg:w-[80%] mx-auto relative'>
            <img src={BannerBG} alt="" className='relative' />
            <div className='flex text-white absolute left-0 top-0 items-center md:p-7 lg:p-12 xl:p-15 2xl:p-20'>
                <div className='leading-8'>
                    <h2 className='text-2xl lg:text-4xl tracking-wide'>University of Toronto</h2>
                    <p>Public university in Toronto, Canada</p>
                    <p className='w-[30%] text-center px-4 py-2 text-xs font-semibold bg-white text-[#0d2c58] rounded-3xl'>Exclusive</p>
                </div>
                <div className='px-5 lg:px-10 xl:px-28'>
                    <span className="h-[100px] lg:h-[120px] xl:h-[140px] w-[3px] block bg-white"></span>
                </div>
                <div className='flex flex-wrap gap-3 xl:gap-20 2xl:gap-40'>
                    <div className="flex flex-col gap-5">
                        <div>
                            <h3 className='font-bold'>Contact Person</h3>
                            <p className='text-sm'>Pro. John Thar </p>
                        </div>
                        <div>
                            <h3 className='font-bold'>Contract Renewal</h3>
                            <p className='text-sm'>12/02/2023 </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div>
                            <h3 className='font-bold'>Contract Date</h3>
                            <p className='text-sm'>12/02/2022 </p>
                        </div>
                        <div>
                            <h3 className='font-bold'>Manager</h3>
                            <p className='text-sm'>Dr. Lawan Johnson</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner