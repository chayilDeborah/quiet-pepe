import Image from "next/image";
import React from "react";

const How = () => {
	return (
		<main
			className="flex justify-center w-full mt-[110px] lg:mt-[200px] text-white overflow-hidden "
			id="how"
		>
			<section className="w-full">
				<h1
					className="who lg:mb-[95px] mb-[35px] font-bold mt-[45px] text-center "
					data-aos="fade-up"
				>
					HOW TO BUY
				</h1>
				<section className="grid lg:grid-cols-2 mt-[112px] lg:w-[97%] w-[90%] mx-auto pb-[15px] lg:mt-[140px] grid-cols-1 ">
					<div
						className="relative"
						data-aos="fade-up"
						data-duration="1400"
					>
						<div className="num w-[110px] h-[110px] absolute -mt-[55px] ml-[45px] ">
							01
						</div>
						<div className="bigcard h-[302px] lg:h-[388px] ">
							<h1 className="subtitle font-bold">
								Create a wallet
							</h1>
							<p className="text-[16.9px] lg:text-[22px] leading-[180%]  ">
								Download Phantom or solflare by going to
								phantom.com or solflare.com and create a solana
								wallet.
							</p>
							{/* <Image
								src={dance}
								alt="gonzo"
								className="w-[159px] mt-[20px] mx-auto rounded-[50%] "
							/> */}
						</div>
					</div>
					<div
						className="relative lg:ml-[50px] mt-[150px] lg:mt-[0px] "
						data-aos="fade-up"
						data-duration="1500"
					>
						<div className="num w-[110px] h-[110px] absolute -mt-[55px] ml-[45px] ">
							02
						</div>
						<div className="bigcard lg:h-[388px] h-[350px]">
							<h1 className="subtitle font-bold">Get Some Sol</h1>
							<div className="text-[16.9px] lg:text-[22px] leading-[180%]  ">
								To buy Talking Ben, you need sol in your wallet.
								Purchase Sol on phantom or transfer from another
								wallet, you can also buy from an exchange and
								send it to your phantom wallet.
							</div>
						</div>
					</div>
					<div
						className="relative mt-[150px] lg:my-[110px] "
						data-aos="fade-up"
						data-duration="1600"
					>
						<div className="num w-[110px] h-[110px] absolute -mt-[55px] ml-[45px] ">
							03
						</div>
						<div className="bigcard h-[255px] lg:h-[300px] ">
							<h1 className="subtitle mb-[15px] font-bold">
								Swap to Quiet PePe
							</h1>
							<div className="text-[16.9px] lg:text-[22px] leading-[160%]  ">
								{" "}
								Go to your raydium and input the contract
								address to swap
							</div>
						</div>
					</div>
				</section>
			</section>
		</main>
	);
};

export default How;
