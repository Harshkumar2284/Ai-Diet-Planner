import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Body from './Components/body'

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <div className="flex-1 overflow-auto">
        <Body />
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}

export default App