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
                <S.Item><FontAwesomeIcon icon={faHeadphonesAlt} />Discover</S.Item>
                <S.Item><FontAwesomeIcon icon={faSearch} />Search</S.Item>
                <S.Item><FontAwesomeIcon icon={faHeart} />Favourites</S.Item>
                <S.Item><FontAwesomeIcon icon={faPlayCircle} />Playlists</S.Item>

            </S.Nav>

        </S.Container>
    )
}