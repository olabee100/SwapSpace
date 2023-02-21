import React from 'react'

const TextRow = ({heading, data}) => {
  return (
    <div>
        <h3 className='font-semibold text-lg xl:text-xl pb-1'>{heading}</h3>
        <p className='text-sm'>{data}</p>
    </div>
  )
}

export default TextRow