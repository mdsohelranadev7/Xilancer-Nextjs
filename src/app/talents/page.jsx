import Container from '@/components/Container'
import Servicecart from '@/components/Servicecart'
import Link from 'next/link'
import React from 'react'
import { TfiArrowTopRight } from 'react-icons/tfi'

const page = () => {
  return (
    <>
      <section id='Talents'>
        <div className="bg-green-50 py-30">
          <Container>
            <div className=" flex items-center justify-between  pb-10">
              <h3 className='text-4xl font-medium'>Popular Categories</h3>

              <div className="flex gap-x-3">
                <Link href={"/"}
                  className='px-4.5 py-2.5 border border-primary rounded-2xl font-medium'>
                  Design & Creative
                </Link>
                <Link href={"/"}
                  className='px-4.5 py-2.5 border border-primary rounded-2xl font-medium'>
                  Dev & IT
                </Link>
                <Link href={"/"}
                  className='px-4.5 py-2.5 border border-primary rounded-2xl font-medium'>
                  Digital Marketing
                </Link>
              </div>
            </div>
          </Container>
          <Servicecart />
        </div>
      </section>
    </>
  )
}

export default page