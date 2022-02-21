import React from "react"
import * as S from'./styles'
import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import Player from "../../components/Player"
import Main from "../../components/Main"

interface Page {
    children: React.ReactNode
};

export default function Default(props: Page){
    return (
        <S.Container>
            <Sidebar/>

            <Header/>

            {props.children}

            <Player/>
            
        </S.Container>
    )
}