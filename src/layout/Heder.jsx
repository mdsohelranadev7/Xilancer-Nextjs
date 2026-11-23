import Container from '@/components/Container'
import Flex from '@/components/Flex'
import Link from 'next/link'
import React from 'react'


const Heder = () => {
    return (
        <>
            <div className="border-b border-[#ECEDEF]">
                <Container>
                    <Flex className={"justify-between py-4 "}>
                        <div className="">
                            <h3>logo</h3>
                        </div>
                        <div className="">
                            <ul className='flex gap-x-5'>
                                <li><Link href={"/"}>Home</Link></li>
                                <li><Link href={"/jobs"}>Jobs</Link></li>
                                <li><Link href={"/talents"}>Talents</Link></li>
                                <li><Link href={"/"}>Subscriptions</Link></li>
                                <li><Link href={"/"}>Pages</Link></li>
                                <li><Link href={"/"}>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="">
                            <Flex className={"gap-x-3"}>
                                <button className='px-4.5 py-2.5 border rounded-3xl font-slab'>Community</button>
                                <button className='px-4.5 py-2.5 border rounded-3xl bg-primary '>Sign Up</button>
                            </Flex>
                        </div>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Heder