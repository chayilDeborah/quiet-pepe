
import Homepage from './components/Homepage'
import Introductn from './components/Introductn'

export default function Home() {
  return (
    <main className='flex justify-center  '>
      <div className='w-full'>
        <Homepage />
        <section className='lg:max-w-[90rem] w-[95%] lg:mx-[0px] mx-auto lg:w-full' >
          {/* <Introductn /> */}
        </section>
      </div>
    </main>
  )
}
