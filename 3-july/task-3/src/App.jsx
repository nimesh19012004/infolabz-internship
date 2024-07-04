import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login, { Addtocart, Logout } from './Customcomps';


function App() {
 return(
  <>
  App
  </>
 );
}

function First(){
  return (
    <div>
      first
    </div>
  )
}

export function Second(){
  return (
    <>
    <First/> 
    <Login/>
    </>
  )
}

function Fourth(){
  return (
    <div>
      fourth
    </div>
  )
}
export function Third(){
  return (
    <div>
      <Logout/>
      <Fourth/>
    </div>
  )
}

export function Buttons(){
  return (
    <div>
      <Login/>
      <Logout/>
      <Addtocart/>
    </div>
  )
}

export default App
