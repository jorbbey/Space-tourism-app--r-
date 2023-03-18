// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import desktopBg from '../assets/home/background-home-desktop.jpg'
// import destinationBg from '../assets/destination/background-destination-desktop.jpg'
// import crewBg from '../assets/crew/background-crew-desktop.jpg'
// import techBg from '../assets/technology/background-technology-desktop.jpg'
// import logo from '../assets/shared/logo.svg'
// import menuOpen from '../assets/shared/icon-hamburger.svg'
// import menuClose from '../assets/shared/icon-close.svg'
// import Background from 'hero-slider/dist/components/Slide/Background'

// const Header = () => {
//   const navLinks = [
//     {
//       id: 0,
//       num: '00',
//       title: 'Home',
//       path: '/',
//       bgI: `${desktopBg}`,
//     },

//     {
//       id: 1,
//       num: '01',
//       title: 'Destination',
//       path: '/destination',
//       bgI: `${destinationBg}`,
//     },

//     {
//       id: 2,
//       num: '02',
//       title: 'Crew',
//       path: '/crew',
//       bgI: `${crewBg}`,
//     },

//     {
//       id: 3,
//       num: '03',
//       title: 'Technology',
//       path: '/technology',
//       bgI: `${techBg}`,
//     },
//   ]
//   const [ activeState, setActiveState ] = useState( desktopBg )

//   return (
//     <div
//       className="text-white w-full flex justify-around items-center" style={{backgroundImage: {activeState}}} 
//     >
//       <div className="w-full h-20 md:my-14 flex justify-between items-center">
//         <Link to="/" className="mx-10 md:mx-20">
//           <img src={logo} alt="logo" />
//         </Link>
//         <div className="block bg-gray-800 text-transparent h-0.5 w-40 md:w-60 lg:w-1/3 rounded-lg"></div>
//         <div className="mx-10 md:hidden">
//           <img src={logo} alt="open" />
//         </div>

//         <div className="hidden md:flex justify-center md:justify-start lg:justify-center items-center w-full md:w-2/3 lg:w-1/2 h-96 top-40 md:top-0 absolute md:relative md:h-16 text-white shadow-3xl bg-purple-700">
//           <div className="flex flex-col md:flex-row justify-around items-center bg-transparent w-5/6 md:w-full lg:w-5/6 h-full text-lg bg-gray-800">
//             {navLinks.map(({ title, path, id, num, index }) => (
//               <Link
//                 to={path}
//                 key={title}
//                 onClick={() => {
//                   console.log(id)
//                 }}
//                 className="uppercase nav-links cursor-pointer"
//               >
//                 {num} {title}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header
