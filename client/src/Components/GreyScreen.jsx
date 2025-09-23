import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

export default function GreyScreen(props) {
  return (
    <div className={`absolute top-0 left-0 h-screen w-screen z-20 flex justify-center items-center ${props.display}`} style={{backgroundColor:"#00000080"}}>
      
      {props.authenticate === "register"?<Register set={props.setAuthenticate}/>:<Login set={props.setAuthenticate}/>}
      
    </div>
  )
}
