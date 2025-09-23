import React, { useState } from 'react'
import axios from "axios";
export default function Register(props) {
    // Controlled Inputs
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    // REGISTER FUNCTION
    const register = async()=>{
      if(password!=confirm){
        alert("passwords do not match")
      }else{
        try {
          const response = await axios.post("http://localhost:8080/register",{
            user: username,
            pass: password
          })
          alert(response.data)
        } catch (error) {
          
        }
      }
    }
  return (
    <div className='bg-gradient-to-r from-fuchsia-100 to-zinc-200 p-6 shadow-lg shadow-black  w-96 rounded-2xl h-96 flex flex-col justify-around items-center pl-10 pr-10 '>
      <h1 className=' font-sans font-bold text-gray-700 text-4xl'>Sign Up</h1>
      <div className='flex flex-col w-full text-zinc-800 font-semibold'>
        <label htmlFor="username">Username:</label>
        <input type="text" className='border rounded-lg  px-2 py-1 font-semibold text-md text-zinc-600' value={username} onChange={(e)=>{
            setUsername(e.target.value)
        }}/>
      </div>
      <div className='flex flex-col w-full text-zinc-800 font-semibold'>
        <label htmlFor="password">Password:</label>
        <input type="password" className='border rounded-lg  px-2 py-1 font-semibold text-md text-zinc-600' value={password} onChange={(e)=>{
            setPassword(e.target.value)
        }}/>
      </div>
      <div className='flex flex-col w-full text-zinc-800 font-semibold'>
        <label htmlFor="confirm">Confirm Password:</label>
        <input type="password" className='border rounded-lg  px-2 py-1 font-semibold text-md text-zinc-600' value={confirm} onChange={(e)=>{
            setConfirm(e.target.value)
        }}/>
      </div>
      <div className='w-full flex flex-col justify-center items-center'>
        <button className='border px-2 rounded-md py-1 text-zinc-800 font-semibold hover:cursor-pointer w-24 hover:bg-blue-700 transition-all duration-200 hover:text-fuchsia-50' onClick={register}>Sign Up</button>
        <h1 className=' hover:underline hover:cursor-pointer'onClick={()=>{
            props.set("login")

        }}>Already have an account? Sign in here!</h1>
      </div>
    </div>
  )
}
