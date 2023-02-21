import React from "react"
import "./JoinAccepted.css"
import pic2 from "../../../../assets/School/images/uni-logo.png"
import completeArrow from '../../../../assets/School/images/completeArrow.jpeg'
import processArrow from '../../../../assets/School/images/processArrow.jpeg';
import img from '../../../../assets/School/images/person.png'
import checked from '../../../../assets/School/images/checked.png'

const JoinAccepted = ({ done, question, id }) => {
    console.log(id)
    return (
        <div>
            {
                done === true ? (
                    <div className='flex items-center justify-between'>
                    <span className='w-[35px] h-[35px] rounded-full bg-[#5bc90b] text-white flex items-center justify-center'>
                    <img src={checked} alt="/" className='object-cover w-[20px]' />
                    </span> 
                    <img src={completeArrow} alt="/" className='w-10/12 h-2.5' />
                </div>
                ) : (
                    <div className='flex items-center justify-between'>
                    <span className='w-[35px] h-[35px] rounded-full bg-[#0D2C58] text-white flex items-center justify-center'>
                    <img src={checked} alt="/" className='object-cover w-[20px]' />
                    </span> 
                    <img src={completeArrow} alt="/" className='w-10/12 h-2.5' />
                </div>
                )
            }
       </div>
    )
}

export default JoinAccepted