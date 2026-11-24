import React from 'react'
import Jobcart from './Jobcart'

const Finaljobcart = () => {

    const Cartdata = [
        { id: 1, jobtitle: "Logo Design for Business Loan Brokerage", date: "jun 5 2026 ", desicnation: "MidLevel", position: "MidLevel", price: "$260", job: "hello", posttime: "jan 4 2023", desicnation: " sohel rana", requarment1: "photoshop", requarment2: "photoshop", requarment3: "photoshop", requarment4: "photoshop", },

    ]
    return (

        <>
            <div className="">
                {
                    Cartdata.map((s) => {
                        return (
                            <div className="" key={s.id}>
                                <Jobcart
                                    jobtitle={s.jobtitle}
                                    jobtime={s.date}
                                    position={s.position}
                                    price={s.price}
                                    job={s.jobtime}
                                    posttime={s.posttime}
                                    description={"s.description"}
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


        </>
    )
}

export default Finaljobcart