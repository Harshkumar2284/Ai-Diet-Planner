import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
<<<<<<< HEAD
import Footer from './Components/Footer'
=======
import GreyScreen from './Components/GreyScreen'
>>>>>>> 1cb819f386a43ac854926e7edbe6514c2688389f

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <Login />
      <Footer />
=======
      <GreyScreen />
>>>>>>> 1cb819f386a43ac854926e7edbe6514c2688389f
    </>
  )
}

export default App
