"use client";
import Image from 'next/image'
import React, { useState } from "react";
import logo from '../assets/logo.jpg'
import Link from "next/link";
import menuh from "../assets/menuh.svg";
import close from "../assets/close.svg";
import tg from '../assets/tg.svg'
import twit from '../assets/twit.svg'


const Navbar = () => {

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};


	return (
		<nav className="flex lg:max-w-[90rem] w-[95%] mx-auto lg:w-full justify-between my-[37px] text-white">
			<Link href="/">
				<section className='flex '>
					<Image src={logo} alt='logo' className=' lg:w-[90px] w-[60px] rounded-[50%] ' />
				</section>
			</Link>
			
			<div className="lg:hidden w-[6%] ">
				<button
					onClick={toggleMenu}
					className="lg:mt-[0px] mt-[20px] lg:mr-[0px] mt-[15px] "
				>
					<div className="-ml-[18px] ">
						{isMenuOpen ? (
							<Image
								src={close}
								alt="close"
								className="w-[24px] -mr-[35px] fixed z-500 close"
							/>
						) : (
							<Image
								src={menuh}
								alt="close"
								className=" w-[45px] -mt-[20px] "
							/>
						)}
					</div>
				</button>
			</div>
			<section
				className={`${isMenuOpen
						? "block fixed  z-50 p-[50px] lg:p-[0px] lg:text-left  text-center bg-[#050505] bg-opacity-500 w-[100%] mx-auto"
						: "hidden"
					} lg:flex font-dm-sans justify-between text-[18px] leading-[150%] lg:w-[539px] my-auto `}
			>
				<Link href="/">
					<h1 className=" lg:my-auto hover:text-[#445fe3]">
						Home
					</h1>
				</Link>
				<Link href="/#about">
					<h1 className="my-[20px] lg:my-auto hover:text-[#445fe3] ">
						About
					</h1>
				</Link>
				<Link href="/#features">
					<h1 className="lg:my-auto hover:text-[#445fe3]">
					Tokenomics
					</h1>
				</Link>
				<Link href="/#services">
					<h1 className="my-[20px] lg:my-auto hover:text-[#445fe3]">
					How To Buy
					</h1>
				</Link>
			</section>
			<div className='hidden lg:flex w-[140px] justify-between   '>
			<Link href="/#about">
					<div className='w-[58px] h-[58px] rounded-[16px] tg '>
						<Image src={tg} alt='telegram' className='' />
					</div>
				</Link>
				<Link href="/#features">
				<div  className='w-[58px] h-[58px] rounded-[16px] tg '>
						<Image src={twit} alt='twitter' className='' />
					</div>
				</Link>
			</div>
		</nav>
	)
}

export default Navbar