import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import tg from '../assets/tg.svg'
import twit from '../assets/twit.svg'

const Community = () => {
    return (
        <main className='flex justify-center text-white mt-[100px] '>
            <div className='lg:max-w-[90rem] w-[95%] mx-auto lg:w-full'>
                <div className='lg:flex justify-between '>
                    <section>
                        <h3 className='join lg:mt-[80px]  text-center lg:text-left'>JOIN OUR COMMUNITY</h3>
                        <p className='lg:w-[792px] text-[18px] lg:text-[24px] leading-[180%] text-center lg:text-left text-[#000] '>As Gunzo swings through the digital jungle, gathering memes and causing mischief, his gang of loyal followers grows stronger with each laugh shared. Together, we fuel our meme arsenal, amplifying the hilarity and spreading joy across cyberspace.</p>
                        <div className='flex w-[140px] mt-[40px] justify-center lg:justify-between mx-auto lg:mx-[0px]  '>
                            <Link href="/#about" className=' '>
                                <div className='w-[105px] h-[80px] rounded-[16px] tgjoin '>
                                    <Image src={tg} alt='telegram' className='w-[50px] ' />
                                </div>
                            </Link>
                            <Link href="/#features">
                                <div className='w-[105px] h-[80px] rounded-[16px] tgjoin ml-[40px] '>
                                    <Image src={twit} alt='twitter' className='w-[50px] ' />
                                </div>
                            </Link>
                        </div>
                    </section>
                    <section>
                    <div className=' video-container'>
                                    <video loop className="lg:w-[548px] w-[90%] h-[425px] lg:h-[542px] mx-auto lg:mx-[0px] mt-[55px] lg:mt-[0px] " autoPlay muted>
                                        <source src="/money.mp4" type="video/mp4" />
                                    </video>
                                </div>
                    </section>

                </div>
            </div>

        </main>
    )
}

export default Community