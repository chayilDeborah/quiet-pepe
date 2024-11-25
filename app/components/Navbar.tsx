"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import Link from "next/link";
import menuh from "../assets/menuh.svg";
import close from "../assets/close.svg";
import tg from "../assets/tg.svg";
import twit from "../assets/twit.svg";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="flex lg:max-w-[1240px] overflow-hidden mt-[25px] w-[95%] mx-auto lg:w-full justify-between lg:my-[37px] text-white">
			<Link href="/">
				<section className="flex ">
					<Image
						src={logo}
						alt="logo"
						className="w-[65px] lg:w-[90px] rounded-[50%] z-[10000] "
					/>
				</section>
			</Link>

			<div className="lg:hidden w-[6%] ">
				<button
					onClick={toggleMenu}
					className="lg:mt-[0px] mt-[20px] lg:mr-[0px] "
				>
					<div className="-ml-[18px] mt-[16px] ">
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
				className={`${
					isMenuOpen
						? "block inset-0 fixed z-50 pb-[50px] pt-[100px] px-[50px] lg:p-[0px] lg:text-left  text-center bg-[#517E3A] bg-opacity-500 w-[100%] mx-auto"
						: "hidden"
				} lg:flex justify-between text-[22px] leading-[150%] lg:w-[200px] my-auto `}
			>
				<Link href="/ ">
					<h1 className=" lg:my-auto hover:text-[#00B700] lg:hidden block">
						Home
					</h1>
				</Link>
				<Link href="/#about lg:hidden block">
					<h1 className="my-[20px] lg:my-auto hover:text-[#00B700] lg:hidden block ">
						About
					</h1>
				</Link>
				<div className="lg:flex justify-between lg:w-[200px]  hidden">
					<Link href="/">
						<h1 className=" lg:my-auto hover:text-[#00B700]">
							Home
						</h1>
					</Link>
					<Link href="/#about">
						<h1 className="my-[20px] lg:my-auto hover:text-[#00B700] ">
							About
						</h1>
					</Link>
				</div>
			</section>
			<div className="hidden lg:flex w-[140px] justify-between   ">
				<Link href="https://t.me/QuietPepe">
					<div className="w-[58px] h-[58px] rounded-[16px] tg ">
						<Image src={tg} alt="telegram" className="" />
					</div>
				</Link>
				<Link href="https://x.com/QuietPepe_Sol">
					<div className="w-[58px] h-[58px] rounded-[16px] tg ">
						<Image src={twit} alt="twitter" className="" />
					</div>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
