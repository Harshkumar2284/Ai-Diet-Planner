import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import GreyScreen from './Components/GreyScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <GreyScreen />
    </>
  )
}

export default App
