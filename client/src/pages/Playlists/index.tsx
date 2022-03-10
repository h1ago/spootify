import React, { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import CardItem from "../../components/CardItem";
import Loading from "../../components/Loading";
import { DeviceIdContext } from "../../context/DeviceIdContext";
import { TokenContext } from "../../context/TokenContext";
import { getPlaylistsGenre, getPlaylistsUser } from "../../services/api";
import * as S from'./styles'

export default function Playlists(){
    const [playlists, setPlaylists] = useState<any>()
    const {token} = useContext(TokenContext)
    const {deviceId} = useContext(DeviceIdContext)
    const {state}: any = useLocation();
    const userId = state.userId
    const genreId = state.genreId
    
    useEffect( () => {
        ( async () => {
            let playlists
            if(userId)
                playlists = await getPlaylistsUser(token.acessToken, userId)
            else
                playlists = await getPlaylistsGenre(token.acessToken, genreId)
            console.log(playlists)
            setPlaylists(playlists)
        } )()
    }, [] )

    if(!playlists)
        return <Loading size={100} />

    return (
        <S.Container>

            <S.TitlePage>{userId ? 'Minhas Playlists' : 'Playlists'}</S.TitlePage>

            {
                playlists.items.map( (playlist: any) => (
                    <CardItem
                        acessToken={token.acessToken}
                        deviceId={deviceId}
                        path={`/playlist/${playlist.id}`}
                        contextUri={playlist.uri}
                        image={playlist.images[0].url}
                        uri={undefined}
                        type="playlist"
                        title={playlist.name}
                    />
                ))
            }
        </S.Container>
    )
}