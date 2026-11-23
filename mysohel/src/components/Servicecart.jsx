import Image from 'next/image'
import React from 'react'
import Container from './Container'
import { IoIosStar } from 'react-icons/io'


const Servicecart = ({ projectname, title, rating, clientname, price, mobile, lamin }) => {
    return (
        <div>
            <Container>
                <div className="p-4 border border-bordercolor w-106 h-114 rounded-2xl bg-white">
                    <Image src={mobile} width={392} height={224} alt={"image"} />
                    <h2 className='text-[#414E62] py-3'>{projectname}</h2>
                    <h2 className='text-[20px] font-medium'>{title}</h2>
                    <h4 className='py-3 flex items-center  gap-x-2  border-b border-bordercolor'> <IoIosStar />{rating}</h4>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-x-2 pt-1.5 items-center">
                            <Image src={lamin} width={"36"} height={"36"} alt={"image"} />
                            <h3 className='font-medium'>{clientname}</h3>
                        </div>
                        <span>{`Starting at: ${price}`}</span>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Servicecart