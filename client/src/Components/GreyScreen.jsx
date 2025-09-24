import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

export default function GreyScreen(props) {
  return (
    <div className={`fixed top-0 left-0 h-screen w-screen z-20 flex justify-center items-center ${props.display}`} style={{backgroundColor:"#00000080"}}>
      <div className='absolute text-zinc-500 font-bold text-lg hover:cursor-pointer hover:text-red-500 transition-colors duration-200 ' style={{top:"180px", left:"920px"}} onClick={()=>{
        props.setDis("hidden")
      }}>
        x
      </div>
      
      {props.authenticate === "register"?<Register set={props.setAuthenticate}/>:<Login set={props.setAuthenticate}/>}
      
    </div>
  )
}
