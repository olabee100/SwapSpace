import React from 'react'

const Navbar = () => {
  return (
    <div className='px-4 md:px-5 lg:px-28 xl:px-36 2xl:px-40 w-screen h-[80px] fixed flex items-center justify-between text-white z-10 bg-[#0d2c58]'>
      <div className='flex items-center'>
          <h1 className='text-white text-xl lg:text-3xl font-bold'>Offer Letter</h1>
      </div>
      <div className='flex items-center'>
          <ul className='flex items-center text-xs lg:text-xs xl:text-sm gap-2 lg:gap-3 xl:gap-5 2xl:gap-8'>
              <li>Home</li>
              <li>Services</li>
              <li>Profile Evaluation</li>
              <li>Webinars</li>
              <li>About Us</li>
              <li>Contact Us</li>
          </ul>
      </div>
      <div className='flex items-center gap-3 xl:gap-8'>
        <a href="/school/signup">  <button className='px-3 xl:px-5 py-1 xl:py-2 bg-white text-[#0d2c58] rounded-lg'>Login</button></a>
         <a href="/school/signup"><button className='px-3 xl:px-5 py-1 xl:py-2 border border-white rounded-lg'>SignUp</button></a> 
      </div>
    </div>
  )
}

export default Navbar