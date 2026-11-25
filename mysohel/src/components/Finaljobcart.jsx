import React from 'react'
import Jobcart from './Jobcart'
import Container from './Container'

const Finaljobcart = () => {

    const Cartdata = [
        { id: 1, jobtitle: "Logo Design for Business Loan Brokerage", date: "jun 5 2026", position: "MidLevel", price: "$260", job: "hello", desicnation: "Fixed", posttime: "posted 3 hours ago", description: "We are seeking a talent graphic designer to create a professional logo", requarment1: "Business Card Design", requarment2: "Graphic Design", requarment3: "Graphic Design", requarment4: "Adobe Illustrator", },

        { id: 2, jobtitle: "Full-time professional Android and IOS app developer", date: "jun 5 2026", position: "MidLevel", price: "$500", job: "hello", desicnation: "Fixed", posttime: "posted 3 hours ago", description: "We are seeking a talent graphic designer to create a professional logo", requarment1: "Technical Writing", requarment2: "Data Entry", requarment3: "Copy Writing", requarment4: "Adobe Illustrator", },

        { id: 3, jobtitle: " Submit Proposals for My Agency  (Focus on Writing)", date: "jun 5 2026", position: "Not mandatory", price: "$500", job: "hello", desicnation: "Fixed", posttime: "posted 3 hours ago", description: "We are seeking a talent graphic designer to create a professional logo", requarment1: "Firebase on Android", requarment2: "App Development", requarment3: "web Development", requarment4: "Software Architecture", },

    ]
    return (
        <>
            <Container>
                <div className="my-30">

                    <h3 className=' mb-10 text-4xl font-medium'>Latest Job</h3>
                    <div className="grid w-full grid-cols-3">

                        {Cartdata.map((s) => {
                            return (
                                <div className="" key={s.id}>
                                    <Jobcart
                                        jobtitle={s.jobtitle}
                                        jobtime={s.date}
                                        position={s.position}
                                        price={s.price}
                                        // job={s.jobtime}
                                        posttime={s.posttime}
                                        desicnation={s.desicnation}
                                        description={s.description}
                                        requarment1={s.requarment1}
                                        requarment2={s.requarment2}
                                        requarment3={s.requarment3}
                                        requarment4={s.requarment4}
                                    />
                                </div>
                            )
                        })
                        }
                    </div>

                </div>

            </Container>

        </>
    )
}

export default Finaljobcart