import React from "react"
import "./Accepted.css"
import pic from "../../../../assets/School/images/student-image.png"
import pic2 from "../../../../assets/School/images/uni-logo.png"
import completeArrow from '../../../../assets/School/images/completeArrow.jpeg'
import processArrow from '../../../../assets/School/images/processArrow.jpeg';
import img from '../../../../assets/School/images/person.png'
import checked from '../../../../assets/School/images/checked.png'
import JoinAccepted from "./JoinAccepted"
import { AcceptedData } from "../../../../utils/AcceptedData";
import {Link} from "react-router-dom"
const Accepted = () => {
    return (
        <>
            <div className='pt-[130px] w-[80%] mx-auto'>
            <div className="header">
                    <div className="logo-hold">
                        <img src={ pic2 } alt="loading" />
                        <div>University of Toronto</div>
                    </div>
                    <div className="titleHold">
                        <div className="title">University Dashboard</div>
                        <div className="subTitle">Students</div>
                    </div>
                </div>

      <div className='overflow-x-auto relative scroll-smooth scrollbar-hide pt-[30px]'>
        <table className='w-full text-sm text-left mt-4 border-separate border-spacing-y-6'>
          <thead className='capitalize text-[20px] pb-3'>
            <tr className='border border-b'>
              <th scope="col" className="py-3 pr-52 xl:pr-56 whitespace-nowrap border-b border-black/50">
                Name
              </th>
              <th scope="col" className="py-3 pr-20 xl:pr-24 whitespace-nowrap border-b border-black/50">
                University selected
              </th>
              <th scope="col" className="py-3 pr-20 xl:pr-24 whitespace-nowrap border-b border-black/50">
                Document selected
              </th>
              <th scope="col" className="py-3 pr-20 xl:pr-24 whitespace-nowrap border-b border-black/50">
                Pendencies/ Rejection
              </th>
              <th scope="col" className="py-3 pr-20 xl:pr-24 whitespace-nowrap border-b border-black/50">
                Conditional OfferLetter
              </th>
              <th scope="col" className="py-3 pr-20 xl:pr-24 whitespace-nowrap border-b border-black/50">
                Completed document selected
              </th>
              <th scope="col" className="py-3 pr-52 xl:pr-56 whitespace-nowrap border-b border-black/50">
                Offer Letter
              </th>
              <th scope="col" className="py-3 pr-52 xl:pr-56 whitespace-nowrap border-b border-black/50">
                COA
              </th>
              <th scope="col" className="py-3 pr-52 xl:pr-56 whitespace-nowrap border-b border-black/50">
                Visa file
              </th>
              <th scope="col" className="py-3 whitespace-nowrap border-b border-black/50">
                Visa Decision
              </th>
            </tr>
          </thead>
          <tbody className=''>
                {
                  AcceptedData.map((props) => (
                    <tr className='bg-[#F4F4F4] overflow-x-auto my-4' key={ props._id}>
                      <td className="py-8 mt-7">
                        <div className='flex items-center gap-3'>
                          <span><img src={props.img} alt="" className='w-[70px] h-[70px] rounded-full object-cover' /></span>
                          <div>
                            <Link to="/school/dashboard/student"><h3 className='font-medium text-lg cursor-pointer'>{ props.name }</h3></Link>
                            <p className='text-xs text-center text-zinc-500'>{props.course }</p>
                          </div>
                        </div>
                      </td>
                       {
                        props.process.map((inner) => (
                          <td className="py-3" key={inner.id}>
                                <div className='flex items-center justify-between'>
                              {
                                inner.done === true ? (
                                    <span className='w-[35px] h-[35px] rounded-full bg-[#5bc90b] text-white flex items-center justify-center'>
                                    <img src={checked} alt="/" className='object-cover w-[20px]' />
                                    </span> 
                                ) : (
                                  <span className='w-[35px] h-[35px] rounded-full bg-[#0D2C58] text-white flex items-center justify-center'>1</span>
                                )
                            }
                                {
                                  inner.id !== "9" ? (
                                    <img src={completeArrow} alt="/" className='w-10/12 h-2.5' />
                                  ) : null
                                }
                        </div>
                              {/* <div className='flex items-center justify-between'>
                                <span className='w-[35px] h-[35px] rounded-full bg-[#0D2C58] text-white flex items-center justify-center'>1</span> 
                                <img src={processArrow} alt="/" className='w-10/12 h-3.5' />
                              </div> */}
                      </td>
                        ))
                      }
            </tr>
                  ))
            }
            
          </tbody>
        </table>
    </div>
    </div>
        </>
    )
}

export default Accepted