"use client"
import React, { useEffect } from "react"
import About from './components/About'
import Community from './components/Community'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import How from './components/How'
import Introductn from './components/Introductn'
import Tokenomics from './components/Tokenomics'
import Aos from "aos"
import "aos/dist/aos.css"; 

export default function Home() {

  useEffect(() => {
    Aos.init({
       offset: 0,
       duration: 1200,
       easing: "ease",
       delay: 0,
    })
  }, [])

  return (
    <main className='flex justify-center  '>
      <div className='w-full'>
        <Homepage />
        <section className='lg:max-w-[1280px] w-[95%] mx-auto lg:w-full' >
          <About />
          <How />
        </section>
        <Tokenomics />
        <Community />
        <Footer />
      </div>
    </main>
  )
}
