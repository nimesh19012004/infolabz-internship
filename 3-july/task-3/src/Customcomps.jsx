import React from 'react'

function Login (){
    return (
        <div>
            Login
        </div>
    )
}

export function Logout(){
    return (
        <div>
            Logout
        </div>
    )
}

export function Addtocart(){
    return (
        <div>
            add to cart
        </div>
    )
}

export function All(){
    return <div>
        <Login/>
        <Logout/>
        <Addtocart/>
    </div>
}

export default Login
