import React from "react";
// import CopyButton from "./CopyButton";
import Link from "next/link";
import Image from "next/image";
import heros from "../assets/heros.png";

const Introductn = () => {
	return (
		<main className="lg:flex justify-center my-[100px] overflow-hidden  w-full">
			<section className="lg:w-[58%] ">
				<h3
					className="text-[18px] leading-[150%] font-bold tracking-[12.06px] text-center lg:text-left aos-animate lg:ml-[20px] lg:mb-[11px] "
					data-aos="fade-up"
				>
					INTRODUCING
				</h3>
				<h1
					className="text-[58px] lg:text-[125px] leading-[90%] h1 font-bold mb-[36px] text-center lg:text-left mt-[15px] lg:mt-[0px] "
					data-aos="fade-up"
				>
					$GENESIS
				</h1>
				<p
					className="lg:text-[24px] text-[18px] text-center lg:text-left leading-[170%] mb-[40px] "
					data-aos="fade-up"
				>
					Welcome to Adam-Eve, the AI platform that combines everyday
					convenience with advanced expertise. Whether you&apos;re
					looking for quick answers or deep insights, Adam-Eve have
					you covered.
				</p>
				{/* <CopyButton /> */}
				<div
					className="lg:flex w-[200px] lg:w-full  mx-auto lg:mx-[0px] "
					data-aos-offset="10"
					data-aos="fade-up"
				>
					<Link href="/#services">
						<button className="farmbtn w-[200px] lg:w-[251px] h-[63px] lg:h-[75px] lg:mr-[30px] ">
							BUY ON UNISWAP
						</button>
					</Link>
					<Link href="/#services">
						<button className="farmbtn w-[200px] lg:w-[251px] h-[63px] lg:h-[75px] mt-[20px] lg:mt-[0px] ">
							DEXSCREENER
						</button>
					</Link>
				</div>
			</section>
			<section
				className="lg:mt-[20px] mt-[75px] w-[320px] mx-auto lg:mx-0 lg:w-[448px] "
				data-aos="fade-up"
			>
				<Image src={heros} alt="" className="rounded-[8px]" />
			</section>
		</main>
	);
};

export default Introductn;
