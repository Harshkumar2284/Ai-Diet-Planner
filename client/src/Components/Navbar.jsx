import React, { useState } from 'react';
import GreyScreen from './GreyScreen';

export default function Navbar() {
  const [display, setDisplay] = useState("hidden");
  const [authenticate,setAuthenticate] = useState("")
  // Functions
  const handleLoginDisplay = ()=>{
    setDisplay("block")
    setAuthenticate("login")
  }
  const handleSignUpDisplay = ()=>{
    setDisplay("block")
    setAuthenticate("register")
  }
  return (
    <nav className='w-full border-1 border-black py-4 bg-zinc-800 flex justify-around' style={{color:"#f07651"}}>
      <div>
        <h1 className=' text-4xl mt-3 font-lg' style={{fontFamily:"cursive"}}><span className='font-bold'>B</span>ite<span className='font-bold'>B</span>ot</h1>
      </div>
      <list className="flex justify-around list-none mt-3">
        <li className=' font-semibold hover:text-orange-500 text-lg hover:cursor-pointer transition-colors duration-150 hover:underline'>Supported Diets</li>
        <li className=' font-semibold hover:text-orange-500 text-lg hover:cursor-pointer transition-colors duration-150 hover:underline ml-14'>Pricing</li>
        <li className=' font-semibold hover:text-orange-500 text-lg hover:cursor-pointer transition-colors duration-150 hover:underline ml-14'>For Professionals</li>
      </list>
      <div className='flex flex-col items-center'>
        <button className='w-20 py-2 rounded-xl hover:cursor-pointer text-white font-semibold' style={{backgroundColor:"#f07651"}} onClick={handleSignUpDisplay}>SignUp</button>
        <h1 className='hover:underline hover:cursor-pointer' onClick={handleLoginDisplay}>Already a member? Sign In</h1>
      </div>
      <GreyScreen display={display} setDis={setDisplay} authenticate = {authenticate} setAuthenticate = {setAuthenticate}/>
    </nav>
  );
}
