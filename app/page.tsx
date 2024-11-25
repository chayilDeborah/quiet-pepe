"use client";
import React, { useEffect } from "react";
import About from "./components/About";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Aos from "aos";
import "aos/dist/aos.css";
import How from "./components/How";

export default function Home() {
	useEffect(() => {
		Aos.init({
			offset: 0,
			duration: 1200,
			easing: "ease",
			delay: 0,
		});
	}, []);

	return (
		<main className="flex justify-center  ">
			<div className="w-full">
				<Homepage />
				<section className="lg:max-w-[1230px] w-[95%] mx-auto lg:w-full">
					<About />
					<How />
				</section>
				<Community />
				<Footer />
			</div>
		</main>
	);
}
