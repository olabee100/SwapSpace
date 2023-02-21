import React from 'react'
import {BsFacebook, BsInstagram, BsVimeo, BsLinkedin, BsYoutube, BsTwitter} from 'react-icons/bs'

const DashFooter = () => {
  return (
    
<div className='w-full bg-[#0D2C58]'>
    <footer className="p-4  text-white sm:p-6 w-[95%] lg:w-[80%] mx-auto">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 md:w-3/12">
                <a href="/" className="flex items-center">
                    <p className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">OfferLetter</p>
                </a>
                <p className='py-4 text-3xl'>Our Story</p>
                <p className='text-xs leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum proin cursus ut aenean aliquam. At consectetur quis luctus adipiscing pellentesque vulputate sit. Sit mauris risus suspendisse facilisis gravida et nisl. Nam elit tristique ut nunc. Quis orci id accumsan enim in dictum odio scelerisque elementum. Faucibus maecenas nisl amet purus vel sit arcu amet. Aliquam malesuada semper nec lobortis mauris, malesuada odio tristique viverra.</p>
            </div>
            <div className="md:w-8/12 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                <div>
                    <h2 className="mb-6 text-xl text-white">Quick Links</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4 text-xs">
                            <a href="" className="text-[#BDBDBD] hover:underline">About</a>
                        </li>
                        <li className="mb-4 text-xs">
                            <a href="" className="text-[#BDBDBD] hover:underline">Our Services</a>
                        </li>
                        <li className="mb-4 text-xs">
                            <a href="" className="text-[#BDBDBD] hover:underline">Our Work</a>
                        </li>
                        <li className="mb-4 text-xs">
                            <a href="" className="text-[#BDBDBD] hover:underline">Our Blog</a>
                        </li>
                        <li className="mb-4 text-xs">
                            <a href="" className="text-[#BDBDBD] hover:underline">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-xl text-white">Email Us</h2>
                    <ul className="">
                        <li className="mb-4 text-xs">
                            <a href="" className="hover:underline text-[#BDBDBD]">flick@flick.com</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-xl text-white">Call Us</h2>
                    <ul className="">
                        <li className="mb-4 text-xs">
                            <a href="#" className="hover:underline text-[#BDBDBD]">+971-4-576-6770</a>
                        </li>
                        <li className='text-xs'>
                            <a href="#" className="hover:underline text-[#BDBDBD]">+971-55-983-7007</a>
                        </li>
                        <div className="flex flex-col gap-4 pt-5">
                            <div className='flex gap-4'>
                                <BsFacebook/>
                                <BsTwitter />
                                <BsLinkedin />
                            </div>
                            <div className='flex gap-4'>
                                <BsYoutube />
                                <BsVimeo />
                                <BsInstagram />
                            </div>
                        </div>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-xl text-white">Office</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4 text-xs">
                            <a href="#" className="underline text-[#BDBDBD]">Office no. G-02. Building 1, Ground Floor. Dubai Media City - Dubai</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
            <span className="text-xs text-white text-center pt-5 block">Copyright © 2022 OfferLetter. All Rights Reserved.</span>
    </footer>
</div>

  )
}

export default DashFooter