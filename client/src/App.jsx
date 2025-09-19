import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar>Hello</Navbar>
      <h1 className=' text-2xl text-black font-bold underline'>AI PLANner</h1>
    </>
  )
}

export default App 