import React, { useState } from 'react'
import axios from 'axios'

export default function Login(props) {
  // Controlled Inputs
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  // Input Change Functions
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  // LOGIN FUNCTION
  const login = async () => {
    try {
      const response = await axios.post("http://localhost:8080/login",{
        user:username,
        pass:password
      })
      alert(response.data)
    } catch (error) {
      
    }
  }
  return (
    <div className='bg-gradient-to-r from-fuchsia-100 to-zinc-200 p-6 shadow-lg shadow-black  w-96 rounded-2xl h-96 flex flex-col justify-around items-center pl-10 pr-10 '>
      <h1 className=' font-sans font-bold text-gray-700 text-4xl'>Sign In</h1>
      <div className='flex flex-col w-full'>
        <label htmlFor="username" className='text-lg font-semibold text-zinc-800'>Username:</label>
        <input type="text" className='border rounded-lg  px-2 py-1 font-semibold text-md text-zinc-600' value={username} onChange={handleUsername} />
      </div>
      <div className='flex flex-col w-full'>
        <label htmlFor="password" className='text-lg font-semibold text-zinc-800'>Password:</label>
        <input type="password" className='border rounded-lg px-2 py-1 font-semibold text-md text-zinc-600' value={password} onChange={handlePassword} />
      </div>
      <div className='flex flex-col items-center'>
        <button className='border px-2 rounded-md py-1 text-zinc-800 font-semibold hover:cursor-pointer hover:bg-blue-700 transition-all duration-200 hover:text-fuchsia-50' onClick={login}>Sign In</button>
        <h1 className=' hover:underline hover:cursor-pointer' onClick={()=>{
          props.set("register")
        }}>Don't have an account?Sign Up now!</h1>
      </div>
    </div>
  )
}
