import React from "react"
import Dashboard from './layouts/Dashboard'
import Login from "./layouts/Login"


export default function App(){

    const code = new URLSearchParams(window.location.search).get('code')
    
    if(!code)
        return <Login/>

    return <Dashboard code={code}/>
    
}