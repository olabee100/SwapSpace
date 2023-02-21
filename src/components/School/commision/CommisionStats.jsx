import React from 'react'
import Offer from '../../../assets/School/images/offer.png';
import Student from '../../../assets/School/images/Student.png';
import Donut from '../dashboardPage/Donut';

let className='grid grid-cols-2 items-center border border-spacing-3 rounded-lg shadow-lg py-8 px-4 xl:px-7 2xl:px-12 w-[32%] xl:w-[30%] gap-4 hover:shadow-2xl ease-in-out relative';

const CommisionStats = () => {
    const data1 = {
        labels: ["green", "white"],
        datasets: [
          {
            data: [100, 25],
            backgroundColor: ["#009006", "#F1F1F1"]
          },
        ],
    };

    const options = {
        responsive: true,
        legend: {
          display: false,
        },
        cutout: 50,
        borderWidth: 0,
        borderRadius: 5,
      };
    
      const plugins = [{
        beforeDraw: function(chart) {
         var width = chart.width,
             height = chart.height,
             ctx = chart.ctx;
             ctx.restore();
             var fontSize = (height /60).toFixed(2);
             ctx.font = fontSize + "em sans-serif";
             ctx.textBaseline = "center";
             var text = "80%",
             textX = Math.round((width - ctx.measureText(text).width) / 2),
             textY = height / 1.8;
             ctx.fillText(text, textX, textY);
             ctx.save();
        } 
      }]
  return (
    <div className='pt-[144px] w-full h-full text-[#0D2C58]'>
        <div className="flex w-[80%] mx-auto justify-between">
            <div className='flex items-center border border-spacing-3 rounded-lg shadow-lg py-16 px-8 xl:px-11 2xl:px-16 w-[32%] xl:w-[30%] gap-4 hover:shadow-2xl ease-in-out'>
                <p className='text-xs font-bold'><span className='font-bold text-4xl '>2000</span><br /> Students</p>
                <img src={Student} alt="" className='w-[90px] xl:w-[120px]' />
            </div>
            <div className='flex items-center border border-spacing-3 rounded-lg shadow-lg py-16 px-8 xl:px-11 2xl:px-16 w-[32%] xl:w-[30%] gap-4 2xl:gap-8 hover:shadow-2xl ease-in-out'>
                <p className='text-xs font-bold'><span className='font-bold text-4xl '>1800</span><br /> Commissions Received</p>
                <img src={Offer} alt="" className='w-[90px] xl:w-[120px] mr-24' />
            </div>

            <Donut 
                data={data1} 
                options={options} 
                plugins={plugins} 
                className={className}
                para='Commissions Received'
                span='80%'
            />
        </div>
    </div>
  )
}

export default CommisionStats