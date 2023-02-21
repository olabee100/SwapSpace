import React from "react";
import { Chart, ArcElement } from "chart.js";
import Donut from "./dashboardPage/Donut";
import { Link } from "react-router-dom";

Chart.register(ArcElement);

let className = "py-1 px-2 w-[31%] 2xl:w-3/12 h-[240px] xl:h-[280px] bg-[#0D2C58] rounded-lg flex flex-col gap-6 justify-center items-center";

let textClass = 'text-white'

function MyChart() {
  const data1 = {
    labels: ["green", "white"],
    datasets: [
      {
        data: [300, 300],
        backgroundColor: ["#009006", "#FFFFFF"]
      },
    ],
    text: '50 Accepted'
  };

  const data2 = {
    labels: ["red", "white"],
    datasets: [
      {
        data: [90, 200],
        backgroundColor: ["#FF0000", "#FFFFFF"]
      },
    ],
    text: '20 Rejected'
  };

  const data3 = {
    labels: ["yellow", "white"],
    datasets: [
      {
        data: [100, 30],
        backgroundColor: ["#F1FF50", "#FFFFFF"]
      },
    ],
    text: '30 Pending'
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

  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 180).toFixed(2);
        ctx.font = fontSize + "em Roboto";
        ctx.textBaseline = "top";
        ctx.fontColor = "white";
        var text = "70 APPLICATIONS",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return (
    <div className='pt-40 w-[95%] lg:w-[80%] mx-auto'>
        <h3 className='text-xl font-bold pb-10'>Applications Received</h3>
        <div className="flex justify-between">
            <Donut  
              data={data1} 
              options={options} 
              plugins={plugins} 
              text={data1.text}
              className={className}
              textClass={textClass}
              id='accepted'
            />
            <Donut 
              data={data2} 
              options={options} 
              plugins={plugins} 
              text={data2.text}
              className={className}
              textClass={textClass}
              id='rejected'
            />
            <Donut 
              data={data3} 
              options={options} 
              plugins={plugins} 
              text={data3.text}
              className={className}
              textClass={textClass}
              id='pending'
            />
        </div>
    </div>
  );
}

export default MyChart;
