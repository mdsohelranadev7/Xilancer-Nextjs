import React from 'react'
import Container from './Container'
import Image from 'next/image'

const Freelancerlist = ({ name, proffetion, discription, img, alt, icons }) => {
    return (
        <>
            <div className="">
                <Container>
                    <div className=" w-106 h-86.25 bg-white px-4.5 py-5 border rounded-lg flex flex-col justify-center  items-center">
                        <div className="w-16 h-16 rounded-full bg-amber-300 ">
                            <Image src={img} width={64} height={64} alt={alt} />

                        </div>
                        <h3 className='text-[18px] font-medium'>{name}</h3>
                        <span className='text-[#414E62] '>{proffetion}</span>
                        <p className='font-medium py-6 text-textcolor'>{discription}</p>
                        <span className='text-2xl rounded-full p-2 border border-bordercolor text-primary'>{icons}</span>

                    </div>
                </Container>
            </div>
        </>
    )
}

export default Freelancerlist