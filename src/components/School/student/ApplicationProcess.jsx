import React from 'react';
import Hat from '../../../assets/School/images/hat.png'
import ProcessCard from '../UI/ProcessCard';

const ApplicationProcess = () => {
  return (
    <div className='w-[80%] mx-auto pt-[74px]'>
        <div className='flex  justify-between items-center pb-2'>
          <h3 className='text-2xl font-medium'>All Applications</h3>
          <div className="flex flex-col justify-center items-center gap-1 font-medium">
            <h3 className='text-2xl font-medium'>Managed By</h3>
            <p>Frank Kane</p>
          </div>
        </div>

        <div className="border-t">
            <div className="flex justify-between py-[25px]">
                <ProcessCard 
                    img={Hat} 
                    span='Completed' 
                    title='University of Toronto' 
                    subtitle='University Selected' 
                    step='Step 1' 
                />
                <ProcessCard 
                    img={Hat} 
                    span='Completed' 
                    title='Document' 
                    subtitle='zgdtka.pdf' 
                    step='Step 2' 
                />
                <ProcessCard 
                    img={Hat} 
                    span='Completed' 
                    title='Pendencies Rejection' 
                    subtitle='No Rejection' 
                    step='Step 3' 
                />
                <ProcessCard 
                    img={Hat} 
                    span='Completed' 
                    title='Conditional Offer Letter' 
                    subtitle='Conditional Offer Letter Given' 
                    step='Step 4' 
                />

            </div>
        </div>
    </div>
  )
}

export default ApplicationProcess