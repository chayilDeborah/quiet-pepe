import Image from 'next/image'
import React from 'react'
import tokenomics from '../assets/tokenomics.gif'

const Tokenomics = () => {
    return (
        <main id='tokenomics' className='overflow-hidden '>
            <section className="relative lg:mt-[200px] mb-[00px] lg:mb-[0px] mt-[50px] text-center text-white ">
                <div className='lg:w-full h-auto bg-[url("https://res.cloudinary.com/dmye53wps/image/upload/v1714069905/ballons_jri5mb.jpg")] lg:pb-[200px] bg-cover bg-center w-full '>
                    <div className='lg:max-w-[1280px]  w-[95%] mx-auto lg:w-full'>
                        <div className=''>
                            <h1 className='who lg:mb-[95px] lg:mt-[24px]  font-bold mt-[100px] text-center pt-[130px] mb-[35px] '  data-aos="fade-up">TOKENOMICS</h1>
                            <div className='flex flex-col-reverse lg:flex-row  justify-between '>
                                <Image src={tokenomics} alt='gif' className='lg:w-[545px] h-[437px] lg:h-[507px] mb-[75px] lg:mb-[75px] ' data-aos="fade-right"/>
                                <div className='mx-auto lg:w-[560px] w-[95%] ' data-aos="fade-left">
                                    <h1 className='border-[2px] text-[14px] lg:text-[24px] flex justify-between border-white px-[15px] py-[15px] rounded-[16px] mt-[30px] '>Symbol<span className='ml-[140px] '>GONZO</span></h1>
                                    <h1 className='border-[2px] text-[14px] lg:text-[24px] flex justify-between border-white px-[15px] py-[15px] rounded-[16px] mt-[30px] '>Tax<span className='ml-[140px] '>0/0</span></h1>
                                    <h1 className='border-[2px] text-[14px] lg:text-[24px] flex justify-between border-white px-[15px] py-[15px] rounded-[16px] mt-[30px] '>Liquidity<span className='ml-[90px] lg:ml-[140px] '> Locked</span></h1>
                                    <h1 className='border-[2px] text-[14px] lg:text-[24px] flex justify-between border-white px-[15px] py-[15px] rounded-[16px] mt-[30px] '>Total Supply<span className='ml-[30px] lg:ml-[140px] '> 100,000,000,000</span></h1>
                                    <div className='border-[2px] text-[14px] lg:text-[24px] px-[15px] py-[15px] rounded-[16px] mt-[30px] lg:mb-[75px] mb-[75px] '>
                                        <h1 className='text-center border-white '>TOKEN ADDRESS</h1>
                                        <p className='lg:text-[22px] text-[14px]  '>0x00000000000000000000000</p>
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