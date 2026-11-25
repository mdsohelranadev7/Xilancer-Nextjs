import React from 'react'
import Container from './Container'
import Image from 'next/image'
import mobil1 from "/public/mobil1.png"
import mobil2 from "/public/mobil2.png"


const Mobilbanner = () => {
    return (
        <>
            <Container>
                <div className="flex justify-between">
                    <div className=" w-[50%]">
                        <Image src={mobil1} />

                    </div>
                    <div className=" w-[50%]">

                        <Image src={mobil2} />
                    </div>

                </div>
            </Container>
        </>
    )
}

export default Mobilbanner