import Container from '@/components/Container'
import Servicecart from '@/components/Servicecart'
import Link from 'next/link'
import React from 'react'
import mobileuiux from "/public/mobileulux.png"
import lamin from "/public/lamin.png"
import uidesign from "/public/uidesign.png"
import business from "/public/business.png"
import bannertemplate from "/public/bannertemplate.png"
import greengraden from "/public/greengraden.png"

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


            <div className="grid grid-cols-3 gap-y-7.5">
              <Link href={"/"}>
                <Servicecart
                  mobile={mobileuiux}
                  projectname={"Design & Creative"}
                  title={"I will do professional figma design for website  UI UX and mobile app"}
                  rating={"4.2 ( 3 review )"}
                  lamin={lamin}
                  clientname={"Rebert Bross"}
                  price={"$20"}
                />
              </Link>
              <Link href={""}>
                <Servicecart
                  mobile={uidesign}
                  projectname={"Design & Creative"}
                  title={"I will do professional figma design for website  UI UX and mobile app"}
                  rating={"4.2 ( 3 review )"}
                  lamin={lamin}
                  clientname={"Rebert Bross"}
                  price={"$20"}
                />
              </Link>
              <Link href={"/"}>
                <Servicecart
                  mobile={business}
                  projectname={"Design & Creative"}
                  title={"I will do professional figma design for website  UI UX and mobile app"}
                  rating={"4.2 ( 3 review )"}
                  lamin={lamin}
                  clientname={"Rebert Bross"}
                  price={"$40"}
                />
              </Link>
              <Link href={""}>
                <Servicecart
                  mobile={bannertemplate}
                  projectname={"Design & Creative"}
                  title={"I will do professional figma design for website  UI UX and mobile app"}
                  rating={"4.2 ( 3 review )"}
                  lamin={lamin}
                  clientname={"Rebert Bross"}
                  price={"$15"}
                />
              </Link>
              <Link href={"/"}>
                <Servicecart
                  mobile={greengraden}
                  projectname={"Design & Creative"}
                  title={"I will do professional figma design for website  UI UX and mobile app"}
                  rating={"4.2 ( 3 review )"}
                  lamin={lamin}
                  clientname={"Rebert Bross"}
                  price={"$29"}
                />
              </Link>
              <Link href={"/"}>
                <Servicecart
                  mobile={mobileuiux}
                  projectname={"Design & Creative"}
                  title={"I will do professional figma design for website  UI UX and mobile app"}
                  rating={"4.2 ( 3 review )"}
                  lamin={lamin}
                  clientname={"Rebert Bross"}
                  price={"$20"}
                />

              </Link>
            </div>
          </Container>



        </div>
      </section >
    </>
  )
}

export default page