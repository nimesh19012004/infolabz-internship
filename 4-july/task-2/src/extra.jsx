import React from 'react'
import { Comptwo } from './custom'
import { Login } from './practice'


const First = () => {
  return (
    <div>
      
    </div>
  )
}
export const Second=()=>{
    return (
        <div>
            second
        </div>
    )
}

export const Third=()=>{
    return (
        <div>
            <Comptwo/>
            <Second/>
            <Login/>
        </div>
    )
}

export default First
