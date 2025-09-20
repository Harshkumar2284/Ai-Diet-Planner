import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import GreyScreen from './Components/GreyScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Footer/>
      <GreyScreen/>
      <h1 className=' text-2xl text-black font-bold underline'>AI PLANner</h1>
    </>
  )
};

export default App 