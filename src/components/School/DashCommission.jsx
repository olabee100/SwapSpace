import React from 'react'
import Donut from './dashboardPage/Donut';
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);


let className="py-1 px-2 w-[31%] 2xl:w-3/12 h-[240px] xl:h-[280px] border border-[#0D2C58] rounded-lg flex flex-col gap-6 justify-center items-center";

let textClass = 'text-black font-bold'

const DashCommission = () => {
  const data1 = {
    // labels: ["green", "white"],
    datasets: [
      {
        data: [100],
        backgroundColor: ["#0D2C58"]
      },
    ],
    text: 'Total Commission'
  };

  const data2 = {
    // labels: ["red", "white"],
    datasets: [
      {
        data: [200, 200],
        backgroundColor: ["#0D2C58", "#89969F"]
      },
    ],
    text: 'Commission Received'
  };

  const data3 = {
    // labels: ["yellow", "white"],
    datasets: [
      {
        data: [25, 100],
        backgroundColor: ["#0D2C58", "#89969F"]
      },
    ],
    text: 'Commission Pending'
  };

  const options = {
    responsive: false,
    legend: {
      display: false,
    },
    cutout: 60,
    borderWidth: 0,
    borderRadius: 5,
  };

  const plugins = [{
    beforeDraw: function(chart) {
     var width = chart.width,
         height = chart.height,
         ctx = chart.ctx;
         ctx.restore();
         var fontSize = (height / 200).toFixed(2);
         ctx.font = fontSize + "em sans-serif";
         ctx.textBaseline = "top";
         var text = "3000 COMMISSIONS",
         textX = Math.round((width - ctx.measureText(text).width) / 2),
         textY = height / 2;
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
         var fontSize = (height / 200).toFixed(2);
         ctx.font = fontSize + "em sans-serif";
         ctx.textBaseline = "top";
         var text = "1500 COMMISSIONS",
         textX = Math.round((width - ctx.measureText(text).width) / 2),
         textY = height / 2;
         ctx.fillText(text, textX, textY);
         ctx.save();
    } 
  }]

  return (
    <div className='py-10 w-[95%] lg:w-[80%] mx-auto'>
    <a href="/school/dashboard/commisions">  <h3 className='text-xl font-bold pb-3 uppercase'>COMMISSION QUATERLY</h3></a>

        <div className="flex justify-between py-10">
            <Donut 
              data={data1} 
              options={options} 
              plugins={plugins} 
              text={data1.text}
              className={className}
              textClass={textClass}
              id = 'application'
            />
            <Donut 
              data={data2} 
              options={options} 
              plugins={plugins2} 
              text={data2.text}
              className={className}
              textClass={textClass}
              id = 'commisions'
            />
            <Donut 
              data={data3} 
              options={options} 
              plugins={plugins2} 
              text={data3.text}
              className={className}
              textClass={textClass}
              id = 'commisions'
            />
        </div>
    </div>
  )
}

export default DashCommission