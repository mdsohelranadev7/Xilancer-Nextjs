import React from 'react'
import Container from './Container'
import Freelancerlist from './Freelancerlist'
import client1 from "/public/client1.png"
import { ImQuotesLeft } from 'react-icons/im'

const freelancerslist = [
    { id: 1, name: "Esther Howard", proffetion: "Professional Developer", discription: "Joining this marketplace changed my career. I can showcase my skills, connect with real clients, and get paid on time. It feels amazing to grow my freelance journey here.", },

    { id: 1, name: "Jane Cooper", proffetion: "Product Designer", discription: "Joining this marketplace changed my career. I can showcase my skills, connect with real clients, and get paid on time. It feels amazing to grow my freelance journey here." },

    { id: 1, name: "Wade Warren", proffetion: "AI Services", discription: "Joining this marketplace changed my career. I can showcase my skills, connect with real clients, and get paid on time. It feels amazing to grow my freelance journey here." },


    { id: 1, name: "", proffetion: "", discription: "" },
    { id: 1, name: "", proffetion: "", discription: "" },
    { id: 1, name: "", proffetion: "", discription: "" },

]

const Freelancer = () => {
    return (
        <>
            <div className="pt-35 pb-35">
                <h2 className='text-center text-4xl font-medium pb-15'>What Freelancer are Thinking <br /> About Us</h2>
                <Container className={"grid grid-cols-3 gap-y-7.5 "}>

                    {freelancerslist.map((s) => {
                        return (
                            <div className="" key={s.id}>
                                <Freelancerlist
                                    img={client1}
                                    alt={"image"}
                                    name={s.name}
                                    proffetion={s.proffetion}
                                    discription={s.discription}
                                    icons={<ImQuotesLeft />}
                                />

                            </div>
                        )
                    })}

                </Container>
            </div>
        </>
    )
}

export default Freelancer