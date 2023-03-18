import { useContext, useEffect } from 'react'
import { AppBg } from '../App'
import desktopBg from '../assets/home/background-home-desktop.jpg'

const Home = () => {

  const setImgUrl = useContext( AppBg )

  useEffect( () => setImgUrl( desktopBg ) )

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full h-auto">

      <div className='flex flex-col-reverse md:flex-row justify-between items-center mt-20 mb-40 md:mt-80 md:mb-28'>
        {/* text */ }
        <div className="flex flex-col justify-center items-left w-5/6 md:w-1/2 mx-0 md:mx-10">
          <h3 className="uppercase text-gray-400 text-xl md:text-2xl font-semibold w-3/4">
            so you want to travel to
          </h3>
          <h1 className="uppercase text-white text-sxl md:text-mxl lg:text-xxl w-3/4">
            space
          </h1>
          <p className="text-gray-400 text-lg w-full md:w-5/6 lg:w-3/4">
            Let’s face it; if you want to go to space, you might as well genuinely
            go to outer space and not hover kind of on the edge of it. Well sit
            back, and relax because we’ll give you a truly out of this world
            experience!
          </p>
        </div>

        {/* explore button */ }
        <div className="flex justify-center items-center w-5/6 md:w-1/4 cursor-pointer">
          <div className='bg-white text-blue-900 uppercase text-2xl w-52 h-52 rounded-full my-24 md:my-0 py-24 px-14 cursor-pointer'
          >
            explore
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
