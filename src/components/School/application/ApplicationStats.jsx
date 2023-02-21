import React from 'react'
import Donut from '../dashboardPage/Donut'

let className='grid grid-cols-2 items-center border border-spacing-3 rounded-lg shadow-lg py-16 px-4 xl:px-7 2xl:px-12 w-[32%] xl:w-[30%] gap-4 hover:shadow-2xl ease-in-out relative';

const ApplicationStats = () => {
    const data1 = {
        labels: ["green", "white"],
        datasets: [
          {
            data: [100, 50],
            backgroundColor: ["#009006", "#F1F1F1"]
          },
        ],
    };
    const data2 = {
        labels: ["green", "white"],
        datasets: [
          {
            data: [25, 75],
            backgroundColor: ["#FFFF00", "#F1F1F1"]
          },
        ],
    };
    const data3 = {
        labels: ["green", "white"],
        datasets: [
          {
            data: [25, 75],
            backgroundColor: ["#FF0000", "#F1F1F1"]
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
                var text = "55%",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 1.8;
                ctx.fillText(text, textX, textY);
                ctx.save();
        } 
    }]

    const plugins2 = [{
        beforeDraw: function(chart) {
         var width = chart.width,
             height = chart.height,
             ctx = chart.ctx;
             ctx.restore();
             var fontSize = (height / 60).toFixed(2);
             ctx.font = fontSize + "em sans-serif";
             ctx.textBaseline = "center";
             var text = "20%",
             textX = Math.round((width - ctx.measureText(text).width) / 2),
             textY = height / 1.8;
             ctx.fillText(text, textX, textY);
             ctx.save();
        } 
      }]
  return (
    <div className='pt-[144px] w-full h-full text-[#0D2C58]'>
        <div className="flex w-[80%] mx-auto justify-between">
            <Donut 
                data={data1} 
                options={options} 
                plugins={plugins} 
                className={className}
                para='Applications Accepted'
                span='50'
            />
            <Donut 
                data={data2} 
                options={options} 
                plugins={plugins2} 
                className={className}
                para='Applications Pending'
                span='30'
            />
            <Donut 
                data={data3} 
                options={options} 
                plugins={plugins2} 
                className={className}
                para='Applications Rejected'
                span='60'
            />
        </div>
    </div>
  )
}

export default ApplicationStats