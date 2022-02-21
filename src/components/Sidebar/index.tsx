import React from "react"
import * as S from'./styles'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faHeadphonesAlt,
    faHeart,
    faPlayCircle,
    faSearch
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar(){
    return (
        <S.Container>
            
            <S.BoxProfile>
                <S.Avatar src={require('../../assets/avatar.png')}/>
                <S.Name>Olavo</S.Name>
            </S.BoxProfile>

            <S.Nav>
                <S.Item to='/'><FontAwesomeIcon icon={faHeadphonesAlt} />Novidades</S.Item>
                <S.Item to='/search'><FontAwesomeIcon icon={faSearch} />Procurar</S.Item>
                <S.Item to='favourites'><FontAwesomeIcon icon={faHeart} />Favoritos</S.Item>
                <S.Item to='/playlists'><FontAwesomeIcon icon={faPlayCircle} />Playlists</S.Item>

            </S.Nav>

        </S.Container>
    )
}