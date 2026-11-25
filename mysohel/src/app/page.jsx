import Image from "next/image";
import Link from "next/link";
import images from "/public/images.png"
import Container from "@/components/Container";
import Jobs from "@/app/Jobs/page.jsx"
import Talents from "@/app/Talents/page.jsx"
import { FaSearch } from "react-icons/fa";
import Jobcart from "@/components/Jobcart";
import Finaljobcart from "@/components/Finaljobcart";
import Besthire from "@/components/Besthire";
import Freelancer from "@/components/Freelancer";
import Freelancerlist from "@/components/Freelancerlist";
import Mobilbanner from "@/components/Mobilbanner";



export default function Home() {

  return (
    <>
      <div className="bg-linear-to-r from-green-50 to-yellow-50">
        <Container>
          <div className="flex justify-between gap-x-10 pt-24 pb-21">
            <div className="">
              <h1 className="text-[64px] font-medium mb-6 ">Connecting Ideas <br /> with the Right Talent</h1>
              <p className="text-textcolor">We make it’s easier for talents and businesses to connect and we make it absolutely less charges. Hire Talents or Get Hired from our platform and work independently</p>
              <div className=" flex gap-x-4 my-8">
                <button className="px-6 py-4 bg-primary rounded-2xl  text-white border border-primary hover:bg-green-900 cursor-pointer font-medium">Find work</button>
                <button className="px-6 py-4 bg-primary rounded-2xl  text-white border border-primary hover:bg-green-900 cursor-pointer font-medium">Find talent</button>
              </div>

              <div className="relative ">
                <input className="border py-4 pl-4 rounded-lg border-bordercolor  outline-none w-full h-14 " type="text" />
                <span className="absolute top-1/2 -right-4 -translate-1/2 text-[16px] bg-amber-400 p-4 rounded-[5px]  "><FaSearch /></span>

              </div>
              <ul>
                <li><Link href={"/"}></Link></li>
              </ul>
            </div>
            <div className="">
              <Image src={images} height={681} width={756} alt="image" />
            </div>
          </div>
        </Container>
      </div>
      <Jobs />
      <Talents />
      <Besthire />
      <Freelancer />
      <Mobilbanner /> 








    </>
  );
}
