import {useContext, useState} from "react"
import * as S from'./styles'
import Routes from '../../routes'
import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import Player from "../../components/Player"
import useAuth from "../../services/useAuth"
import { TrackContext } from "../../context/TrackContext"
import Loading from "../../components/Loading"
import { TokenContext } from "../../context/TokenContext"

type PropsDashboard = {
    code: string
}

export default function Dashboard({code}: PropsDashboard){
    useAuth(code)
    const {token} = useContext(TokenContext)

    if(!token.acessToken)
        return <Loading size={100}/>
        
    return (
        <S.Container>
            <Sidebar/>

            <Header/>

            <Routes />

            <Player/>
            
        </S.Container>
    )
}