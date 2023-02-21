import React from 'react'
import { Link } from 'react-router-dom';

const TableRow = ({index, img, name, id, gender, school, course, commission, status, manager}) => {
    let bgColor;
    if (index % 2 === 0) {
        bgColor = '#fffff';
    }else {
        bgColor='#e9eff8'
    }
  return (
    <tr key={index} style={{ backgroundColor: `${bgColor}` }}>
        <td className="py-4 px-2 xl:px-6 flex items-center gap-2">
            <span><img src={img} alt="" className='w-[35px] h-[35px] rounded-full object-cover' /></span>
            <Link to="/school/dashboard/student">{ name }</Link>
        </td>
        <td className="py-4 px-2 xl:px-6">
            {id}
        </td>
        <td className="py-4 px-2 xl:px-6 capitalize">
            {gender}
        </td>
        <td className="py-4 px-2 xl:px-6">
            {school}
        </td>
        <td className="py-4 px-2 xl:px-6 capitalize">
            {course}
        </td>
        {commission && <td className="py-4 px-2 xl:px-6">
            <p className={`p-1 rounded-md w-[63%] xl:w-[48%] 2xl:w-[35%] text-center ${commission}`}>{commission}</p>
        </td>}
        {status && <td className="py-4 px-2 xl:px-6">
            <p className={`p-1 rounded-md w-[85%] xl:w-[85%] 2xl:w-[63%] text-center ${status}`}>{status}</p>
        </td>}
        {manager && <td className="py-4 px-2 xl:px-6 capitalize font-bold">
            {manager}
        </td>}
    </tr>
  )
}

export default TableRow