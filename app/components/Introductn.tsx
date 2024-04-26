import React from 'react'
import CopyButton from './CopyButton'
import Link from "next/link";
import Image from 'next/image';
import herogif from '../../public/animation.gif'

const Introductn = () => {
    return (
        <main className='flex justify-center my-[100px] w-full'>
            <section className=' '>
                <h3 className='text-[18px] leading-[150%] font-bold tracking-[12.06px] '>INTRODUCTION</h3>
                <h1 className='text-[72px] lg:text-[188px] mb-[16px] leading-[90%] h1 font-bold mb-[36px]'>$GONZO</h1>
                <p className='text-[22px] leading-[170%] mb-[40px]  '>The mischievous monkey with a knack for causing chaos and spreading laughter on base. </p>
                <CopyButton />
                <div className='flex'>
                    <Link href="/#services">
                        <button className='farmbtn w-[251px] h-[75px] lg:mr-[30px] '>BUY ON UNISWAP</button>
                    </Link>
                    <Link href="/#services">
                        <button className='farmbtn w-[251px] h-[75px] '>DEXTOOL CHART</button>
                    </Link>
                </div>
            </section>
            <section className='-mt-[60px] '>
                <Image src={herogif} alt='' />
            </section>

        </main>
    )
}

export default Introductn