import React from 'react'
import Navbar from './Navbar'
import Introductn from './Introductn'

const Homepage = () => {
  return (
    <main className='w-full  mx-auto overflow-hidden  '>
        <section className='image w-full lg:mt-[0px] lg:h-auto'>
          <div className='content'>
            <Navbar />
            <section className='lg:max-w-[1280px] w-[95%] mx-auto lg:w-full'>
            <Introductn />
            </section>
          </div>

        </section>
    </main>
  )
}

export default Homepage