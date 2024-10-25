import React from "react";
import Image from "next/image";
import Link from "next/link";
import tg from "../assets/tg.svg";
import twit from "../assets/twit.svg";
import thinking from "../assets/thinking.gif";

const Community = () => {
	return (
		<main className="flex justify-center text-white mt-[120px] lg:mt-[200px] overflow-hidden ">
			<div className="lg:max-w-[1280px] w-[95%] mx-auto lg:w-full">
				<div className=" ">
					<section>
						<h3
							className="join lg:mt-[10px]  text-center"
							data-aos="fade-up"
							data-duration="1400"
						>
							JOIN OUR COMMUNITY
						</h3>
						<p
							className="lg:w-[90%] text-[17px] lg:text-[24px] leading-[180%] text-center lg:text-left  mx-auto  text-white "
							data-aos="fade-up"
							data-duration="1600"
						>
							Join our vibrant Adam and Eve community, where
							knowledge meets personality! Access fast, free
							solutions with Adam and Eve or unlock bold insights
							with Eve&apos;s premium expertise. Connect, learn,
							and explore with a points-based system designed for
							deeper engagement. Be part of a space that fuels
							both everyday convenience and advanced
							problem-solving!
						</p>
						<div
							className="flex w-[140px] mt-[65px] lg:mt-[40px] justify-center lg:justify-between mx-auto   "
							data-aos="fade-up"
							data-duration="1800"
						>
							<Link href="/" className=" ">
								<div className="w-[105px] h-[80px] rounded-[16px] tgjoin ">
									<Image
										src={tg}
										alt="telegram"
										className="w-[50px] "
									/>
								</div>
							</Link>
							<Link href="/">
								<div className="w-[105px] h-[80px] rounded-[16px] tgjoin ml-[40px] ">
									<Image
										src={twit}
										alt="twitter"
										className="w-[50px] "
									/>
								</div>
							</Link>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
};
export default Community;
