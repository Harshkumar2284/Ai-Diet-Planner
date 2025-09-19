import React from 'react'
import Login from './Login'

export default function GreyScreen() {
  return (
    <div className={`absolute top-0 left-0 h-screen w-screen z-20 flex justify-center items-center`} style={{backgroundColor:"#00000080"}}>
      <Login />
    </div>
  )
}
