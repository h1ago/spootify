import React from "react"
import * as S from'./styles'
import Routes from '../../routes'
import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import Player from "../../components/Player"


export default function Default(){
    const [path, setPath] = React.useState<String>('/discover')

    function changeRoute(path: String): void{
        setPath(path)
    }

    return (
        <S.Container>
            <Sidebar changeRoute={changeRoute}/>

            <Header/>

            <Routes path={path} />

            <Player/>
            
        </S.Container>
    )
}