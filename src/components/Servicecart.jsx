import Image from 'next/image'
import React from 'react'
import Container from './Container'
import mobileulux from "/public/mobileulux.png"

const Servicecart = ({ projectname, title, rating, clientname, price }) => {
    return (
        <div>
            <Container>
                <div className="p-4 border border-bordercolor w-106 h-114">
                    <Image src={mobileulux} width={392} height={224} alt={"image"} />
                    <h2>{projectname}</h2>
                    <h2>{title}</h2>
                    <h4>{rating}</h4>

                    <Image src={""} width={""} height={""} alt='image' />
                    <h3>{clientname}</h3>
                    <span>{`Starting at: ${price}`}</span>

                </div>
            </Container>
        </div>
    )
}

export default Servicecart