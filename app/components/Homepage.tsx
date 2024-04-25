import React from 'react'
import Navbar from './Navbar'
import Introductn from './Introductn'

const Homepage = () => {
  return (
    <main className='w-full  mx-auto '>
        <section className='image lg:w-full w-[356px] h-[331px] lg:mt-[0px] mt-[60px] lg:h-auto'>
          <div className='content'>
            <Navbar />
            <section className='lg:max-w-[90rem] w-[95%] mx-auto lg:w-full'>
            <Introductn />
            </section>
          </div>

        </section>
    </main>
  )
}

export default Homepage