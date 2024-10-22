import Image from "next/image";
import React from "react";
import tv from "../assets/tv.gif";
import ladies from "../assets/LADIES.png";

const About = () => {
	return (
		<main
			className="flex justify-center w-full mt-[150px] lg:mt-[100px] text-white overflow-hidden "
			id="about"
		>
			<section className="w-full">
				<div className="flex flex-col-reverse lg:flex-row justify-between">
					<section data-aos="fade-right">
						<Image
							src={ladies}
							alt="gif"
							className="lg:w-[506px] mt-[40px] lg:mt-[0px] w-[90%] mx-auto lg:mx-[0px] h-[310px] lg:h-[496px] "
						/>
					</section>
					<section
						className="lg:mt-[30px] lg:ml-[30px] "
						data-aos="fade-left"
					>
						<h3 className="text-[18px] leading-[150%] font-bold tracking-[12.06px]  text-center lg:text-left  test ">
							ABOUT $AEVE
						</h3>
						<h1 className="who mb-[35px] font-bold mt-[17px] lg:mb-[40px] lg:mt-[24px] text-center lg:text-left  ">
							WHO&apos;S ADA-EVE
						</h1>
						<div className="lg:w-[689px] lg:text-[24px] text-[18px] text-center lg:text-left leading-[180%] font-rocknroll ">
							Ada is the perfect AI for those who need fast,
							reliable information at no cost. She’s designed to
							help with your daily questions, offering instant
							solutions that make knowledge easy to access and
							understand. From simple queries to general advice,
							Ada is always ready to assist.
							<div>
								<p>• Completely Free for all users</p>{" "}
								<p>• Instant Answers to everyday questions </p>{" "}
								<p>• Efficient and Easy to Use</p>
							</div>
						</div>
					</section>
				</div>
				<div className=" lg:text-[24px] text-[18px] text-center lg:text-justify leading-[180%] font-rocknroll">
					<p className="mt-[20px]">
						{" "}
						Eve: Unlock Premium AI for Advanced Insights When you
						need more than just basic answers, Eve steps in.{" "}
						<p>
							As a premium AI, Eve provides expert-level analysis
							with a distinct personality. Using accumulated
							knowledge and boundary-pushing conversations, Eve
							offers tailored, in-depth responses—always delivered
							with a bold, unpredictable edge. Gain access to
							Eve’s unique insights through our points-based
							system, perfect for tackling more complex problems.
						</p>
					</p>
				</div>
			</section>
		</main>
	);
};

export default About;
{
	/* */
}
