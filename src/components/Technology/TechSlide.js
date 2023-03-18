
import { useState } from "react"
import { useEffect } from 'react'
import { useRef } from 'react'

const TechSlide = ( { slides, autoPlay } ) => {
  
  const [ activeIndex, setActiveIndex ] = useState( 0 )
  const serial = [ 1, 2, 3 ]


  const prevSlide = () => {
    const firstSlide = activeIndex === 0
    const newIndex = firstSlide ? slides.length - 1 : activeIndex - 1
    setActiveIndex( newIndex )
  }

  const nextSlide = () => {
    const lastSlide = activeIndex === slides.length - 1
    const newIndex = lastSlide ? 0 : activeIndex + 1
    setActiveIndex( newIndex )
  }
  const goToSlide = ( index ) => {
    setActiveIndex( index )
  }

  const autoPlayRef = useRef()

  useEffect( () => {
    autoPlayRef.current = nextSlide
  } )

  useEffect( () => {
    const play = () => {
      autoPlayRef.current()
    }
    const interval = setInterval( play, autoPlay * 1000 )
    return () => clearInterval( interval )
  } )
  
  return (
    <div className=" w-[95%] md:w-full h-auto flex flex-col-reverse md:flex-row justify-around items-center" style={{margin: '0 auto'}}>
      <div className="flex md:flex-col justify-around w-5/6 md:w-20">
        { slides.map( ( slide, index ) => (
            <span
            className={ `material-symbols-outlined  border border-white rounded-full h-5 w-5 md:h-10 md:w-10 lg:h-14 lg:w-14 my-2 text-transparent mx-4 cursor-pointer ${ activeIndex === index ? 'bg-gray-200' : 'transparent'
                }   ` }
              key={ index }
              onClick={ () => goToSlide( index ) }
          >
            </span>
          ) ) }
      </div>
      <div className=" md:w-96 lg:w-1/2 my-10 md:my-0">
        <div className="text-gray-400 uppercase my-2">
          {slides[activeIndex].title}
        </div>
        <div className="text-3xl text-white uppercase my-1">
          {slides[activeIndex].name}
        </div>
        <div className="text-gray-300">{slides[activeIndex].text}</div>
      </div>
      <div className="flex justify-center items-center my-20 md:my-0 md:w-96 lg:w-[500px]">
        <img src={slides[activeIndex].image} className='w-5/6 md:w-3/4 lg:w-5/6 rounded-lg' />
      </div>
    </div>
  )
}

export default TechSlide
