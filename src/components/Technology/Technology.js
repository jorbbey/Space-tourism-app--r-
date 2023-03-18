import { useContext, useEffect } from 'react'
import { AppBg } from '../../App'
import launchVehicle from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceCapsule from '../../assets/technology/image-space-capsule-portrait.jpg'
import spacePort from '../../assets/technology/image-spaceport-portrait.jpg'
import TechSlide from './TechSlide'
import techBg from '../../assets/technology/background-technology-desktop.jpg'

const Technology = () => {
  const setImgUrl = useContext( AppBg )

  useEffect( () => setImgUrl( techBg ) )

  const slides = [
    {
      title: 'the terminology',
      name: 'launch vehicle',
      text:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: launchVehicle,
      serialNum: [ 1, 2, 3 ]
    },
    {
      title: 'the terminology',
      name: 'Space capsule',
      text:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      image: spaceCapsule,
    },
    {
      title: 'the terminology',
      name: 'space port',
      text:
        'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
      image: spacePort,
    },
  ]
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full h-auto">
      <div className='flex-col justify-between items-center w-full h-auto mt-40 md:mt-96 mb-40'>
      <div className=" flex justify-around items-center w-80 lg:w-96 mx-5 md:mx-36">
        <p className="uppercase text-gray-400 text-2xl font-semibold">03</p>
        <h1 className="uppercase text-white text-2xl font-semibold">
          space launch 101
        </h1>
      </div>
      <TechSlide slides={ slides } autoPlay={4} />
      </div>
    </div>
  )
}

export default Technology
