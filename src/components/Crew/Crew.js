import { useContext, useEffect } from 'react'
import { AppBg } from '../../App'
import SlideItems from './SlideItems'
import flightEng from '../../assets/crew/image-anousheh-ansari.png'
import pilot from '../../assets/crew/image-victor-glover.png'
import commander from '../../assets/crew/image-douglas-hurley.png'
import specialist from '../../assets/crew/image-mark-shuttleworth.png'
import crewBg from '../../assets/crew/background-crew-desktop.jpg'

const Crew = () => {
  const setImgUrl = useContext( AppBg )

  useEffect( () => setImgUrl( crewBg ) )

  const slides = [
    {
      title: 'flight engineer',
      name: 'anousheh ansari',
      text:
        'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      image: flightEng,
    },
    {
      title: 'pilot',
      name: 'victor glover',
      text:
        'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      image: pilot,
    },
    {
      title: 'commander',
      name: 'douglas hurley',
      text:
        'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      image: commander,
    },
    {
      title: 'specialist',
      name: 'mark shuttleworth',
      text:
        'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      image: specialist,
    },
  ]
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full h-auto">
      <div className=' flex flex-col-reverse md:flex-row justify-between items-center w-full h-auto mt-40 md:mt-60 mb-40'>
        <div className='w-full'>
          <div className=" flex justify-around items-center w-80 lg:w-96 mx-10 md:mx-36">
            <p className="uppercase text-gray-400 text-2xl font-semibold">02</p>
            <h1 className="uppercase text-white text-2xl font-semibold">
              meet your crew
            </h1>
          </div>
          <SlideItems slides={ slides } autoPlay={ 4 } />
        </div>
      </div>
      </div>
  )
}

export default Crew
