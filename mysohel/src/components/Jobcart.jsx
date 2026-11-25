import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

"client side"

const Jobcart = ({ jobtitle, desicnation, position, price, jobtime, posttime, description, requarment1, requarment2, requarment4, requarment3 }) => {

    return (
        <>
            <article className="w-106 h-100.5 py-8 px-6 border-2 rounded-2xl border-bordercolor ">
                <h2 className='text-[20px] font-medium text-textcolor'>{jobtitle}</h2>
                <div className=" flex gap-x-6 py-3.5">
                    <span className='text-[#414E62]'>{jobtime}</span>
                    <span className='font-medium'>{position}</span>
                </div>

                <div className="flex items-center gap-x-3 ">
                    <span className='text-[20px] font-medium'>{price}</span>
                    <span className='px-3.5 py-1.5 rounded-2xl bg-[#ECEDEF] text-[14px] font-medium'>{desicnation}</span>
                    <span className='text-[#414E62]'>{posttime}</span>

                </div>

                <p className='text-[#3B4759] py-4'>{description}</p>
                <ul className='grid grid-cols-2 gap-x-2 gap-y-2 mb-4'>
                    <li className='px-3.5 py-1.5 border border-bordercolor  rounded-2xl text-[14px] text-center'>{requarment1}</li>
                    <li className='px-3.5 py-1.5 border border-bordercolor  rounded-2xl text-[14px]'>{requarment2}</li>
                    <li className='px-3.5 py-1.5 border border-bordercolor  rounded-2xl text-[14px]'>{requarment3}</li>
                    <li className='px-3.5 py-1.5 border border-bordercolor  rounded-2xl text-[14px]'>{requarment4}</li>
                </ul>

                <div className="flex items-center gap-x-2 text-primary  text-[14px] font-medium">
                    <a href="#">View more </a>
                    <FaArrowRight />
                </div>

            </article>

        </>
    )
}

export default Jobcart