import Image from 'next/image'
import React from 'react'
import tv from '../assets/tv.gif'

const About = () => {
    return (
        <main className='flex justify-center w-full mt-[150px] lg:mt-[100px] text-white overflow-hidden ' id='about'>
            <section className='w-full'>
                <div className='flex flex-col-reverse lg:flex-row justify-between'>
                    <section data-aos="fade-right">
                    <Image src={tv} alt='gif' className="lg:w-[500px] mt-[40px] lg:mt-[0px] w-[90%] mx-auto lg:mx-[0px] h-[420px] lg:h-[616px] " /> 
                    </section>
                    <section className='lg:mt-[90px] lg:ml-[30px] ' data-aos="fade-left">
                        <h3 className='text-[18px] leading-[150%] font-bold tracking-[12.06px]  text-center lg:text-left  test '>ABOUT $GONZO</h3>
                        <h1 className='who mb-[35px] font-bold mt-[17px] lg:mb-[40px] lg:mt-[24px] text-center lg:text-left  '>WHO&apos;S GONZO?!</h1>
                        <div className='lg:w-[689px] lg:text-[24px] text-[18px] text-center lg:text-left leading-[180%] font-rocknroll '>This mischievous monkey is notorious for his light-fingered antics and his uncanny ability to outwit even the most vigilant of netizens.

                          <p className='mt-[20px]'>  With a twinkle in his eye and a sly grin on his face,Gonzo is always on the lookout for his next score. Whether it&apos;s swiping a banana from a rival meme or pilfering pixels from unsuspecting artists, he&apos;s the ultimate digital delinquent.</p>
                        </div>
                    </section>

                </div>
            </section>

        </main>
    )
}

export default About