import React from 'react'
"client side"

const Jobcart = ({ jobtitle, date, position, price, jobtime, posttime, description, requarment1, requarment2, requarment4, requarment3 }) => {

    return (
        <>
            <article className="w-106 h-100.5 py-8 px-6 border ">
                <h2 className='text-[20px] font-medium text-textcolor'>{jobtitle}</h2>
                <div className="">
                    <time className=''>{date}</time>
                    <span>{position}</span>
                </div>

                <div className="">
                    <span>{price}</span>
                    <span>{jobtime}</span>
                    <span>{posttime}</span>

                </div>

                <p>{description}</p>
                <ul>
                    <li>{requarment1}</li>
                    <li>{requarment2}</li>
                    <li>{requarment3}</li>
                    <li>{requarment4}</li>
                </ul>

                <a href="#">View more</a>



            </article>

        </>
    )
}

export default Jobcart