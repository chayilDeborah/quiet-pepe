import React from 'react'
import Navbar from './Navbar'

const Homepage = () => {
  return (
    <main className='w-full  mx-auto '>
        <section className='image lg:w-full w-[356px] h-[331px] lg:mt-[0px] mt-[60px] lg:h-[728px]'>
          <div className='content'>
            <Navbar />
          </div>

        </section>
    </main>
  )
}

export default Homepage