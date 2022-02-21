import React from "react"
import * as S from'./styles'
import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import Player from "../../components/Player"
import Main from "../../components/Main"

export default function Default(){
    return (
        <S.Container>
            <Sidebar/>

            <Header/>

            <Main/>

            <Player/>
            
        </S.Container>
    )
}