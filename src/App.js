import './style.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { createContext } from 'react'
import Home from './components/Home'
import Destination from './components/Destination'
import Crew from './components/Crew/Crew'
import Technology from './components/Technology/Technology'
import NavBar from './components/NavBar'

export const AppBg = createContext()

const App = () => {

  const [ imgUrl, setImgUrl ] = useState()
  console.log(imgUrl);

  const bgTheme = {
    backgroundImage: `url(${ imgUrl })`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%'
  };

  return (
  <AppBg.Provider value={ setImgUrl}>
    <div className='h-auto' style={bgTheme}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
      </div>
    </AppBg.Provider>
  )
}

export default App
