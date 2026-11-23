import Container from '@/components/Container'
import Popularcatagory from '@/components/Popularcatagory'
import Link from 'next/link'
import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'
import { SlBag } from 'react-icons/sl'
import { TbAppsFilled, TbWorld } from 'react-icons/tb'
import { TfiArrowTopRight } from 'react-icons/tfi'


const page = () => {
  return (
    <>
      <section id='Jobs' >

        <div className=" py-30">
          <Container>
            <div className=" flex items-center justify-between  pb-10">
              <h3 className='text-4xl font-medium'>Popular Categories</h3>
              
              <Link href={"/"}
                className='px-4.5 py-2.5 border border-primary rounded-2xl font-medium flex items-center gap-x-1'>
                Browse all categories <TfiArrowTopRight />
              </Link>

            </div>
            <div className="grid grid-cols-4">
              <Popularcatagory
                icon={<TbWorld />}
                title={"Web Devlopment"}
                jobsdetails={"Customer experience and account management jobs."}
                jobscount={"6 Jobs"}
              />
              <Popularcatagory
                icon={<TbAppsFilled />}
                title={"Mobile App Development"}
                jobsdetails={"Customer experience and account management jobs."}
                jobscount={"9 Jobs"}
              />
              <Popularcatagory
                icon={<SlBag />}
                title={"Digital Marketing"}
                jobsdetails={"Customer experience and account management jobs."}
                jobscount={"16 Jobs"}
              />
              <Popularcatagory
                icon={<FaPlayCircle />}
                title={"  Editing"}
                jobsdetails={"Customer experience and account management jobs."}
                jobscount={"14 Jobs"}
              />
            </div>
          </Container>
        </div>
      </section>
    </>
  )
}

export default page