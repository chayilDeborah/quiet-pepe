import React from 'react'

const About = () => {
    return (
        <main className='flex justify-center w-full mt-[350px] lg:mt-[100px] text-white ' id='about'>
            <section className='w-full'>
                <div className='flex flex-col-reverse lg:flex-row justify-between'>
                    <section data-aos="fade-right">
                        <div className=' video-container'>
                            <video loop className="lg:w-[566px] w-[90%] mx-auto lg:mx-[0px] h-[420px] lg:h-[616px] " autoPlay muted>
                                <source src="/tv.mp4" type="video/mp4" />
                            </video></div>
                    </section>
                    <section className='mt-[90px] lg:ml-[30px] ' data-aos="fade-left">
                        <h3 className='text-[18px] leading-[150%] font-bold tracking-[12.06px]  text-center lg:text-left   '>ABOUT $GONZO</h3>
                        <h1 className='who font-bold mt-[17px] lg:my-[24px] text-center lg:text-left  '>WHO&apos;S GONZO?!</h1>
                        <div className='lg:w-[717px] lg:text-[24px] text-[18px] text-center lg:text-left leading-[180%]  '>This mischievous monkey is notorious for his light-fingered antics and his uncanny ability to outwit even the most vigilant of netizens.

                          <p className='mt-[20px]'>  With a twinkle in his eye and a sly grin on his face, Gunzo is always on the lookout for his next score. Whether it&apos;s swiping a banana from a rival meme or pilfering pixels from unsuspecting artists, he&apos;s the ultimate digital delinquent.</p>
                        </div>


                    </section>

                </div>
            </section>

        </main>
    )
}

export default About