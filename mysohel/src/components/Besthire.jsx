import Image from 'next/image'
import React from 'react'
import hirephoto from "/public/hirephoto.png"
import Container from './Container'
import { MdOutlineVerified } from 'react-icons/md'

const Besthire = () => {
    return (
        <>
            <Container>

                <div className="py-35 bg-[#F2F8F7] px-5">
                    <div className=" flex justify-between items-center gap-x-2">
                        <div className="w-[50%]">
                            <h3 className='text-4xl font-medium'>All You Need to Hire The Best</h3>
                            <div className="pt-10 flex gap-x-3">
                                <MdOutlineVerified className='text-4xl inline' />
                                <div className="">
                                    <h4 className='text-[18px] font-medium'>Verified Professionals</h4>
                                    <p>Work with skilled freelancers who pass quality checks and <br /> portfolio reviews.</p>

                                </div>
                            </div>
                            <div className="pt-10 flex gap-x-3">
                                <MdOutlineVerified className='text-4xl inline' />
                                <div className="">
                                    <h4 className='text-[18px] font-medium'>Verified Professionals</h4>
                                    <p>Work with skilled freelancers who pass quality checks and <br /> portfolio reviews.</p>

                                </div>
                            </div>
                            <div className="pt-10 flex gap-x-3">
                                <MdOutlineVerified className='text-4xl inline' />
                                <div className="">
                                    <h4 className='text-[18px] font-medium'>Verified Professionals</h4>
                                    <p>Work with skilled freelancers who pass quality checks and <br /> portfolio reviews.</p>

                                </div>
                            </div>


                        </div>
                        <div className="w-[50%]">
                            <Image src={hirephoto} height={510} width={680} alt='image' />

                        </div>
                    </div>

                </div>

            </Container>
        </>
    )
}

export default Besthire