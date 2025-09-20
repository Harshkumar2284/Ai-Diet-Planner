import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import GreyScreen from './Components/GreyScreen'

function App() {

  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  )
}

export default App 