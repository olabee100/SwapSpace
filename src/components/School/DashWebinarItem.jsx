import React from 'react'

const DashWebinarItem = ({title, desc, img}) => {
  return (
    <div className='max-w-[360px] xl:max-w-sm'>
        <img src={img} alt="/" className='rounded-lg cursor-pointer shadow-md' />
        <h3 className='font-semibold py-4 text-[#0D2C58]'>{title}</h3>
        <p className='text-[#C4C4C4] text-xs'>{desc}</p>
    </div>
  )
}

export default DashWebinarItem