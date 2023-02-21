import React from 'react';
import ProfileImg from '../../../assets/School/images/person.png';
import TextRow from '../UI/TextRow';

const ProfileCard = () => {
  return (
    <div className='w-[80%] mx-auto  pt-[127px]'>
      <div className="flex items-center gap-4 rounded-2xl bg-[#0d2c58] text-white px-6 py-10">
        <div className='flex items-center gap-8 p-2 xl:p-4'>
            <img src={ProfileImg} alt="/" className='w-[135px] h-[135px] xl:w-[156px] xl:h-[156px] rounded-full object-cover' />
            <div className=''>
                <h3 className='text-4xl xl:text-5xl font-medium pb-3'>Aavra Uma</h3>
                <p>2332522238</p>
            </div>
        </div>

        <div className='px-5 xl:px-10 2xl:px-28'>
          <span className="h-[100px] lg:h-[170px] xl:h-[190px] w-[2px] block bg-white"></span>
        </div>

        <div className='flex flex-wrap gap-8 xl:gap-20 2xl:gap-40 p-2 xl:p-4'>
          <div className="flex flex-col gap-8">
            <TextRow heading='Gender' data='Female' />
            <TextRow heading='Date Applied' data='12/02/2023' />
          </div>
          <div className="flex flex-col gap-8">
            <TextRow heading='School' data='Internation School of India' />
            <TextRow heading='Email' data='Aavrauma@gmail.com' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard