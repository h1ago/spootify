import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import CardItem from "../../components/CardItem";
import Loading from "../../components/Loading";
import Title from "../../components/Title";
import { DeviceIdContext } from "../../context/DeviceIdContext";
import { TokenContext } from "../../context/TokenContext";
import { getPlaylistsGenre } from "../../services/api";
import * as S from'./styles'

export default function Playlists(){
    const [playlists, setPlaylists] = useState<any>()
    const {token} = useContext(TokenContext)
    const {deviceId} = useContext(DeviceIdContext)
    const {id} = useParams()
    
    useEffect( () => {
        if(!id) return 
        ( async () => {
            const playlists = await getPlaylistsGenre(token.acessToken, id)
            setPlaylists(playlists)
        } )()
    }, [] )

    if(!playlists || !id)
        return <Loading size={100} />

    return (
        <S.Container>

            <Title withButton={false}>{id}</Title>

            {
                playlists.items.map( (playlist: any, index: number) => (
                    <CardItem
                        key={index}
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