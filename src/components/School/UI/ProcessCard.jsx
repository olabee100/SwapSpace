import React from 'react'

const ProcessCard = ({img,span,title,subtitle,step}) => {
  return (
    <div className='w-[23%] shadow-md rounded-lg hover:shadow-2xl ease-in-out p-3 xl:p-5 '>
        <span className='Accepted py-1 px-2 rounded-md text-[8px] xl:text-[10px] float-right'>{span}</span>
        <div className='w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] rounded-full flex items-center justify-center bg-[#E1EEFF]'>
            <img src={img} alt="/" className='object-contain w-[30px] xl:w-[40px]' />
        </div>
        <div className='mb-[30px]'>
            <h2 className='text-[#0D2C58] text-[15px] xl:text-[18px] 2xl:text-xl'>{title}</h2>
            <p className='text-[13px]'>{subtitle}</p>
        </div>
        <span className='text-[#A1A1A1] text-xs'>{step}</span>
    </div>
  )
}

export default ProcessCard;