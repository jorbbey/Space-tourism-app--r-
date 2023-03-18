
import { useState, useContext, useEffect } from 'react'
import { AppBg } from '../App'
import marsImage from '../assets/destination/image-mars.png'
import moonImage from '../assets/destination/image-moon.png'
import europaImage from '../assets/destination/image-europa.png'
import titanImage from '../assets/destination/image-titan.png'
import destinationBg from '../assets/destination/background-destination-desktop.jpg'

const Destination = () => {
  const setImgUrl = useContext( AppBg )

  useEffect( () => setImgUrl( destinationBg ) )

  const [ img, setImg ] = useState( moonImage )

  const [ head, setHead ] = useState( 'moon' )

  const [ text, setText ] = useState(
    'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
  )

  const [ dist, setDist ] = useState( '384,400 km' )

  const [ time, setTime ] = useState( '3 days' )

  const MoonPage = () => {
    setImg( moonImage )
    setHead( 'moon' )
    setText(
      'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    )
    setDist( '384,400 km' )
    setTime( '3 days' )
  }

  const MarsPage = () => {
    setImg( marsImage )
    setHead( 'mars' )
    setText(
      'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    )
    setDist( '255 mil. km' )
    setTime( '9 months' )
  }

  const EuropaPage = () => {
    setImg( europaImage )
    setHead( 'europa' )
    setText(
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    )
    setDist( '628 mil. km' )
    setTime( '3 years' )
  }

  const TitanPage = () => {
    setImg( titanImage )
    setHead( 'titan' )
    setText(
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    )
    setDist( '1.6 bil. km' )
    setTime( '7 years' )
  }
  return (
    <div className="flex flex-col justify-around items-center w-full h-auto">

      <div className="flex flex-col justify-around items-center w-full h-auto my-40 md:my-72">

        <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full">
          <div className=" flex justify-around items-center w-80 md:w-96 lg:w-1/2 my-20 md:my-0 mx-10">
            <p className="uppercase text-gray-400 text-2xl md:text-xl lg:text-2xl font-semibold">01</p>
            <h1 className="uppercase text-white text-2xl md:text-xl lg:text-2xl font-semibold"
            >
              pick your destination
            </h1>
          </div>
          <div className="flex justify-around items-center my-20 md:my-0 h-12 w-80 md:w-96 lg:w-1/2 md:mx-20 lg:mx-60 shadow-3xl">
            <li
              className="uppercase text-gray-300 text-lg list-none cursor-pointer nav-links"
              onClick={ MoonPage }
            >
              moon
            </li>
            <li
              className="uppercase text-gray-300 text-lg list-none cursor-pointer nav-links"
              onClick={ MarsPage }
            >
              mars
            </li>
            <li
              className="uppercase text-gray-300 text-lg list-none cursor-pointer nav-links"
              onClick={ EuropaPage }
            >
              europa
            </li>
            <li
              className="uppercase text-gray-300 text-lg list-none cursor-pointer nav-links"
              onClick={ TitanPage }
            >
              titan
            </li>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around item-center w-full my-20">
          <div className="flex justify-center items-center">
            <img
              src={ img }
              alt="img"
              className="w-3/4 md:5/6 lg:w-full text-white"
            />
          </div>
          <div className="flex flex-col justify-around items-center w-full md:w-1/2 my-14">
            <h1 className="uppercase text-sl md:text-sxl text-white cursor-pointer md:w-3/4 px-14">
              { head }
            </h1>
            <p className="text-gray-400 text-lg w-5/6 md:w-96">{ text }</p>
            <p className="bg-gray-500 w-96 h-0.5 my-6"></p>
            <div className="flex justify-between items-center w-80 md:w-96">
              <div>
                <p className="text-gray-400 font-semibold text-md uppercase text-md">
                  avg. distance
                </p>
                <h1 className="text-white md:text-3xl lg:text-3xl font-semibold uppercase">
                  { dist }
                </h1>
              </div>
              <div>
                <p className="text-gray-400 font-semibold text-md uppercase text-md">
                  est. travel time
                </p>
                <h1 className="text-white md:text-3xl lg:text-3xl font-semibold uppercase">
                  { time }
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
