import React from "react"
import Default from './layouts/Default'
import Login from "./layouts/Login"


export default function App(){
    const [authenticated, setAuthenticated] = React.useState(false)


    if(!authenticated)
        return <Login/>

    return <Default/>
    
}