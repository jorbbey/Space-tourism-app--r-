import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
const SlideItems = ({ slides, autoPlay }) => {

  const [activeIndex, setActiveIndex] = useState(0)

  const prevSlide = () => {
    const firstSlide = activeIndex === 0
    const newIndex = firstSlide ? slides.length - 1 : activeIndex - 1
    setActiveIndex(newIndex)
  }

  const nextSlide = () => {
    const lastSlide = activeIndex === slides.length - 1
    const newIndex = lastSlide ? 0 : activeIndex + 1
    setActiveIndex(newIndex)
  }

  const goToSlide = (index) => {
    setActiveIndex(index)
  }

  const autoPlayRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextSlide
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }
    const interval = setInterval(play, autoPlay * 1000)
    return () => clearInterval(interval)
  })

  return (
    <div className="h-screen w-full">
      <div className="flex flex-col-reverse justify-around md:flex-row md:justify-center lg:justify-around items-center h-3/4 md:h-5/6 w-full transition-all delay-150 ease-in-out">
        <div className="flex flex-col justify-between w-80 md:w-96 lg:w-96 md:h-60 lg:h-48 lg:mx-48 mt-20 md:mt-0 ">
          <div className="text-center md:text-left">
            <h1 className="text-xl md:text-2xl text-gray-400 uppercase my-1">
              {slides[activeIndex].title}
            </h1>
            <p className="text-white text-3xl md:text-4xl uppercase mb-5">
              {slides[activeIndex].name}
            </p>
          </div>
          <div className=" text-lg text-gray-400 ">
            <p>{slides[activeIndex].text}</p>
          </div>
        </div>
        <div className="w-1/2 flex md:justify-center lg:justify-start mt-96 md:mt-0 ">
          <img
            src={slides[activeIndex].image}
            alt="pics"
            className="w-full md:w-1/2 lg:w-[350px]"
          />
        </div>
      </div>
      <div className='flex justify-center items-center w-full my-64 md:my-20 h-6'>
        <div className="flex w-fit">
          { slides.map( ( slide, index ) => (
            <span
              className={ `material-symbols-outlined h-[15px] w-[15px] text-transparent mx-4 rounded-full cursor-pointer ${ activeIndex === index ? 'bg-gray-500' : 'bg-gray-200'
                }   ` }
              key={ index }
              onClick={ () => goToSlide( index ) }
            >
              circle
            </span>
          ) ) }
        </div>
      </div>
  </div>
  )
}
SlideItems.defaultProps = {
  autoPlay: null,
  slides: [],
}
export default SlideItems
