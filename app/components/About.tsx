import React from 'react'

const About = () => {
    return (
        <main className='flex justify-center w-full mt-[100px] text-white '>
            <section className=' w-[90%] lg:w-full'>
                <div className='flex justify-between'>
                    <section>
                        <div className=' video-container'>
                            <video loop className="lg:w-[566px] h-[616px] " autoPlay muted>
                                <source src="/tv.mp4" type="video/mp4" />
                            </video></div>
                    </section>
                    <section className='mt-[90px] ml-[30px] '>
                        <h3 className='text-[18px] leading-[150%] font-bold tracking-[12.06px]  '>ABOUT $GONZO</h3>
                        <h1 className='who font-bold my-[24px] '>WHO&apos;S GONZO?!</h1>
                        <div className='w-[717px] text-[24px] leading-[180%]  '>This mischievous monkey is notorious for his light-fingered antics and his uncanny ability to outwit even the most vigilant of netizens.

                          <p className='mt-[20px]'>  With a twinkle in his eye and a sly grin on his face, Gunzo is always on the lookout for his next score. Whether it&apos;s swiping a banana from a rival meme or pilfering pixels from unsuspecting artists, he&apos;s the ultimate digital delinquent.</p>
                        </div>


                    </section>

                </div>
            </section>

        </main>
    )
}

export default About