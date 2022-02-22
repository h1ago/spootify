import React from "react"
import * as S from'./styles'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faHeadphonesAlt,
    faHeart,
    faPlayCircle,
    faSearch
} from "@fortawesome/free-solid-svg-icons";


type SidebarProps = {
    changeRoute: (path: String) => void
}
export default function Sidebar({changeRoute}: SidebarProps){
    return (
        <S.Container>
            
            <S.BoxProfile>
                <S.Avatar src={require('../../assets/avatar.png')}/>
                <S.Name>Olavo</S.Name>
            </S.BoxProfile>

            <S.Nav>
                <S.Item onClick={ () => changeRoute('/discover') } ><FontAwesomeIcon icon={faHeadphonesAlt} />Novidades</S.Item>
                <S.Item onClick={ () => changeRoute('/search') }><FontAwesomeIcon icon={faSearch} />Procurar</S.Item>
                <S.Item onClick={ () => changeRoute('/favourites') }><FontAwesomeIcon icon={faHeart} />Favoritos</S.Item>
                <S.Item onClick={ () => changeRoute('/playlists') }><FontAwesomeIcon icon={faPlayCircle} />Playlists</S.Item>

            </S.Nav>

        </S.Container>
    )
}