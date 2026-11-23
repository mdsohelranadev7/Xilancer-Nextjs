import Link from 'next/link'
import React from 'react'
// import { TbWorld } from 'react-icons/tb'

const Popularcatagory = ({ title, jobsdetails, jobscount, icon }) => {
    return (
        <>
            <Link href={"/"}>
                <div className="shadow-xl w-80.25  p-6">
                    <span className='text-[40px]'>{icon}</span>
                    <h2 className='text-[18px] font-medium mt-3 mb-1.5'>{title}</h2>
                    <h3 className='pb-3'>{jobsdetails}</h3>
                    <h4>{jobscount}</h4>
                </div>
            </Link>

        </>
    )
}

export default Popularcatagory