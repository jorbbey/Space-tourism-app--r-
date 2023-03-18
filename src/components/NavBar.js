import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/shared/logo.svg'
import menuOpen from '../assets/shared/icon-hamburger.svg'
import menuClose from '../assets/shared/icon-close.svg'
const navLinks = [
  {
    id: 0,
    number: '00',
    title: 'Home',
    path: '/',
  },

  {
    id: 0,
    number: '01',
    title: 'Destination',
    path: '/destination',
  },

  {
    id: 0,
    number: '02',
    title: 'Crew',
    path: '/crew',
  },

  {
    id: 0,
    number: '03',
    title: 'Technology',
    path: '/technology',
  },
]

const NavBar = () => {
  const [ isOpen, setIsOpen ] = useState( false )

  return (

    <div className="w-full h-20 md:absolute md:my-14 flex justify-between items-center">
      <Link to="/" className="mx-10 md:mx-20">
        <img src={ logo } alt="logo" />
      </Link>
      <div className="block bg-gray-800 text-transparent h-0.5 w-40 md:w-60 lg:w-1/3 rounded-lg">
        .
      </div>
      <div className="mx-10 md:hidden"
      onClick={()=> setIsOpen(!isOpen)}>
        { isOpen ? ( <img src={ menuClose } alt="close" /> ) : ( <img src={ menuOpen } alt="open" /> ) }
      </div>
      <div className={ isOpen ?
        'flex justify-center md:justify-start lg:justify-center items-center w-full md:w-2/3 lg:1/2 h-96 top-40 md:top-0 fixed md:relative md:h-16 text-white shadow-3xl bg-[#04031b] md:bg-transparent'
        :
        'hidden md:flex justify-center md:justify-start lg:justify-center items-center w-full md:w-2/3 lg:1/2 top-0 relative h-16 text-white shadow-3xl' }
      >
        <div className="flex flex-col md:flex-row justify-around items-center bg-transparent w-5/6 md:w-full lg:w-5/6 h-full text-lg">
          { navLinks.map( ( { title, number, path, id } ) => (
            <Link
              to={ path }
              key={ title }
              className="uppercase nav-links cursor-pointer"
            >
              { number } { title }
            </Link>
          ) ) }
        </div>
      </div>
    </div>
  )
}

export default NavBar
