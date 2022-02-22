import React from "react"
import * as S from'./styles'

export default function Header(){
    return (
        <S.Container>
            <S.Image src={require('../../assets/logo.png')}/>
            <S.Title>
                Spootify
            </S.Title>
        </S.Container>
    )
}