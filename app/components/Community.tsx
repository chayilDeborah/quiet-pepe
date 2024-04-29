import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import tg from '../assets/tg.svg'
import twit from '../assets/twit.svg'
import thinking from '../assets/thinking.gif'

const Community = () => {
    return (
        <main className='flex justify-center text-white mt-[120px] lg:mt-[200px] overflow-hidden '>
            <div className='lg:max-w-[1280px] w-[95%] mx-auto lg:w-full'>
                <div className='lg:flex justify-between '>
                    <section>
                        <h3 className='join lg:mt-[80px]  text-center lg:text-left' data-aos="fade-up" data-duration="1400">JOIN OUR COMMUNITY</h3>
                        <p className='lg:w-[695px] text-[17px] lg:text-[24px] leading-[180%] text-center lg:text-left text-white ' data-aos="fade-up" data-duration="1600">As Gonzo swings through the digital jungle, gathering memes and causing mischief, his gang of loyal followers grows stronger with each laugh shared. Together, we fuel our meme arsenal, amplifying the hilarity and spreading joy across cyberspace.</p>
                        <div className='flex w-[140px] mt-[65px] lg:mt-[40px] justify-center lg:justify-between mx-auto lg:mx-[0px]  ' data-aos="fade-up" data-duration="1800">
                            <Link href="https://t.me/gonzo_onchain" className=' '>
                                <div className='w-[105px] h-[80px] rounded-[16px] tgjoin '>
                                    <Image src={tg} alt='telegram' className='w-[50px] ' />
                                </div>
                            </Link>
                            <Link href="https://x.com/gonzo_onchain">
                                <div className='w-[105px] h-[80px] rounded-[16px] tgjoin ml-[40px] '>
                                    <Image src={twit} alt='twitter' className='w-[50px] ' />
                                </div>
                            </Link>
                        </div>
                    </section>
                    <section  data-aos="fade-up">
                        <Image src={thinking} alt='gif' className="lg:w-[505px] w-[90%] h-[425px] lg:h-[542px] mx-auto lg:mx-[0px] mt-[100px] lg:mt-[0px] " />
                    </section>

                </div>
            </div>

        </main>
    )
}
export default Community