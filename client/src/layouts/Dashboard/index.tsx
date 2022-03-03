import {useContext, useState} from "react"
import * as S from'./styles'
import Routes from '../../routes'
import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import Player from "../../components/Player"
import UseAuth from "../../services/useAuth"
import { TrackContext } from "../../context/TrackContext"
import Loading from "../../components/Loading"

type PropsDashboard = {
    code: string
}

export default function Dashboard({code}: PropsDashboard){
    const acessToken = UseAuth(code)
    const {uri} = useContext(TrackContext)

    const [path, setPath] = useState<String>('/discover')

    function changeRoute(path: String): void{
        setPath(path)
    }
    
    if(!acessToken) 
        return <Loading size={100}/>
    
    return (
        <S.Container>
            <Sidebar changeRoute={changeRoute}/>

            <Header/>

            <Routes path={path} token={acessToken}/>

            <Player token={acessToken} trackUri={uri}/>
            
        </S.Container>
    )
}