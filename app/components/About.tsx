import Image from "next/image";
import React from "react";
import image from "../assets/image.png";

const About = () => {
	return (
		<main
			className="flex justify-center w-full mt-[0px] lg:mt-[100px] text-white overflow-hidden "
			id="about"
		>
			<section className="w-full">
				<div className="flex flex-col-reverse lg:flex-row justify-between">
					<section data-aos="fade-right">
						<Image
							src={image}
							alt="gif"
							className="lg:w-[565px] mt-[20px] lg:-mt-[70px] w-full mx-auto lg:mx-[0px] h-[380px] lg:h-[595px] "
						/>
					</section>
					<section
						className="lg:mt-[30px] lg:ml-[30px] "
						data-aos="fade-left"
					>
						<h3 className="text-[18px] leading-[150%] font-bold tracking-[12.06px]  text-center lg:text-left  test ">
							ABOUT $QPEPE
						</h3>
						<h1 className="who mb-[35px] font-bold mt-[17px] lg:mb-[40px] lg:mt-[24px] text-center lg:text-left  ">
							WHO&apos;S QUIET PEPE
						</h1>
						<div className="lg:w-[689px] lg:text-[24px] text-[18px] text-center lg:text-left leading-[180%] font-rocknroll ">
							Welcome to Quiet PePe! <br />
							The internet is noisy, but the best memes don’t need
							to shout. Quiet PePe is a haven for subtle humor,
							clever wit, and understated genius. This is the meme
							revolution where less is more, and the quietest
							laugh is often the loudest.
							<br />
						</div>
					</section>
				</div>
				<div className=" lg:text-[24px] w-[93%] lg:w-[80%] mx-auto text-[18px] text-center lg:text-justify leading-[180%] font-rocknroll">
					<div className="mt-[20px]">
						{" "}
						Here, we celebrate memes that make you pause, think, and
						chuckle – the kind that resonate long after you’ve
						scrolled past. It’s not just about entertainment; it’s
						about fostering a community of creators and fans who
						appreciate the art of subtlety.
					</div>
				</div>
			</section>
		</main>
	);
};

export default About;
