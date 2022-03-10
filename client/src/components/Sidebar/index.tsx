import React, { useContext, useEffect, useState } from "react"
import * as S from'./styles'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faHeadphonesAlt,
    faHeart,
    faPlayCircle,
    faSearch
} from "@fortawesome/free-solid-svg-icons";
import { TokenContext } from "../../context/TokenContext";
import { getUser } from "../../services/api";
import Loading from "../Loading";


export default function Sidebar(){
    const [user, setUser] = useState<any>()
    const {token} = useContext(TokenContext)

    useEffect( () => {
        ( async () => {
            const user = await getUser(token.acessToken)
            setUser(user)
        })()
    }, [] )

    if(!user)
        return <Loading size={100} />

    return (
        <S.Container>
            
            <S.BoxProfile>
                <S.Avatar src={
                    !user.images[0] 
                    ? require('../../assets/avatar.png')
                    : user.images[0].url 
                }/>
                <S.Name>{user.display_name}</S.Name>
            </S.BoxProfile>

            <S.Nav>
                <S.Item to="/" ><FontAwesomeIcon icon={faHeadphonesAlt} />Novidades</S.Item>
                <S.Item to="/favourite"><FontAwesomeIcon icon={faSearch} />Procurar</S.Item>
                <S.Item to="/favourite"><FontAwesomeIcon icon={faHeart} />Favoritos</S.Item>
                <S.Item 
                    to="/playlists"
                    state={{userId: user.id}}
                >
                    <FontAwesomeIcon icon={faPlayCircle} />
                    Playlists
                </S.Item>

            </S.Nav>

        </S.Container>
    )
}