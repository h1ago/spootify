import React from "react"
import * as S from'./styles'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSpotify } from 'react-icons/fa';

export default function Header(){
    return (
        <S.Container>
            <FaSpotify/>
            <S.Title>
                Spootify
            </S.Title>
        </S.Container>
    )
}