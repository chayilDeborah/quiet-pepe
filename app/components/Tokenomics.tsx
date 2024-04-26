import Image from 'next/image'
import React from 'react'

const Tokenomics = () => {
    return (
        <main>
            <section className="relative lg:mt-[128px] mb-[00px] lg:mb-[0px] mt-[50px] text-center text-white ">
                <div className='lg:w-full h-auto bg-[url("https://res.cloudinary.com/dmye53wps/image/upload/v1714069905/ballons_jri5mb.jpg")] bg-cover bg-center w-full '>
                    <div className='lg:max-w-[90rem]  w-[95%] mx-auto lg:w-full'>
                        <div className=''>
                            <h1 className='who font-bold my-[24px] text-center pt-[100px] mb-[60px] '>TOKENOMICS</h1>
                            <div className='lg:flex justify-between '>
                                <div className=' video-container'>
                                    <video loop className="lg:w-[566px] h-[616px] " autoPlay muted>
                                        <source src="/tokenomics.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <div className='mx-auto'>
                                    <h1 className='border-[2px] text-[27px] flex justify-between border-white px-[15px] py-[15px] rounded-[16px] mt-[30px] '>Symbol<span className='ml-[140px] '>GONZO</span></h1>
                                    <h1 className='border-[2px] text-[27px] flex justify-between border-white px-[15px] py-[15px] rounded-[16px] mt-[30px] '>Tax<span className='ml-[140px] '>0/0</span></h1>
                                    <h1 className='border-[2px] text-[27px] flex justify-between border-white px-[15px] py-[15px] rounded-[16px] mt-[30px] '>Liquidity<span className='ml-[90px] lg:ml-[140px] '> Locked</span></h1>
                                    <h1 className='border-[2px] text-[27px] flex justify-between border-white px-[15px] py-[15px] rounded-[16px] mt-[30px] '>Total Supply<span className='ml-[30px] lg:ml-[140px] '> 100,000,000,000</span></h1>
                                    <div className='border-[2px] text-[27px] px-[15px] py-[15px] rounded-[16px] mt-[30px] '>
                                        <h1 className='text-center border-white '>TOKEN ADDRESS</h1>
                                        <p className='text-[22px] '>0x0000000000000000000000000</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default Tokenomics