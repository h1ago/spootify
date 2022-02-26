import React, {useContext, useState} from "react"
import * as S from'./styles'
import Routes from '../../routes'
import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import Player from "../../components/Player"
import { useAuth } from "../../services/useAuth"
import { TrackContext } from "../../context/TrackContext"

type PropsDashboard = {
    code: String
}

export default function Dashboard({code}: PropsDashboard){
    const acessToken = useAuth(code)

    const {uri} = useContext(TrackContext)

    const [path, setPath] = useState<String>('/discover')

    function changeRoute(path: String): void{
        setPath(path)
    }

    return (
        <S.Container>
            <Sidebar changeRoute={changeRoute}/>

            <Header/>

            <Routes path={path} token={acessToken}/>

            <Player token={acessToken} trackUri={uri}/>
            
        </S.Container>
    )
}