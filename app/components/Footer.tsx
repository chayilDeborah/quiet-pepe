import Image from "next/image";
import React from "react";
import foot from "../assets/foot.png";

const Footer = () => {
	return (
		<main
			className="flex justify-center mb-[40px] text-black mt-[70px] lg:mt-[100px] overflow-hidden  "
			data-aos="fade-in"
		>
			<div className="lg:max-w-[1230px] w-[95%] mx-auto lg:w-full">
				<div className="flex justify-between text-white foot lg:text-[16px] text-[13px] ">
					<section>
						<Image
							src={foot}
							alt="footer"
							className="lg:w-[300px] w-[150px] -mt-[15px] lg:-mt-[18px] "
						/>
					</section>
					<h1>All Rights Reserved </h1>
				</div>
			</div>
		</main>
	);
};

export default Footer;
