import React from 'react';
import { Doughnut,} from "react-chartjs-2";
import { Link } from 'react-router-dom';

const Donut = ({data, options, plugins, text, className, textClass, span, para, id}) => {

  if (id) {
    return(
      <div className={className}>
        {span && <p className='text-sm font-bold lg:pl-2 xl:pl-4'><span className='font-bold text-4xl'>{span}</span><br /> {para}</p>}
        <div className='text-center'>
          <a href={`/school/dashboard/${id} `}>
          <div className={span && 'absolute w-[45%] xl:w-[40%] 2xl:w-[35%] left-[45%] xl:left-[45%]'}>
              <Doughnut
                  data={data}
                  options={options}
                  plugins={plugins}
                  className={span ? `` : 'w-[100%]'}
              />   
          </div>
          {text && <p className={textClass}> {text}</p>}
          </a>
        </div>
      </div>
    )
  }
  return (

    <div className={className}>
        {span && <p className='text-sm font-bold lg:pl-2 xl:pl-4'><span className='font-bold text-4xl'>{span}</span><br /> {para}</p>}
        <div className={span && 'absolute w-[45%] xl:w-[40%] 2xl:w-[35%] left-[45%] xl:left-[45%]'}>
            <Doughnut
                data={data}
                options={options}
                plugins={plugins}
                className={span ? `` : 'w-[100%]'}
            />   
        </div>
        {text && <p className={textClass}> {text}</p>}
    </div>
  )
}

export default Donut