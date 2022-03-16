import { useContext, useEffect, useState } from "react"
import * as S from'./styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { getSearch } from "../../services/api";
import { TokenContext } from "../../context/TokenContext";
import Title from "../../components/Title";
import CardItem from "../../components/CardItem";
import { DeviceIdContext } from "../../context/DeviceIdContext";

export default function Search(){
    const [query, setQuery] = useState<string>('')
    const [result, setResult] = useState<any>(null)
    const {token} = useContext(TokenContext)
    const {deviceId} = useContext(DeviceIdContext)

    useEffect( () => {

        (async () => {
            try {
                const result = await getSearch(token.acessToken, query)
                setResult(result)
            } catch (error) {
                setResult(null)
            }
        })()

    }, [query] )

    if(!result)
        return (
            <S.Container>
                <S.WrapperBar>
                    <FontAwesomeIcon icon={faSearch}/>
                    <S.Input 
                        type="text"
                        placeholder="Pesquise por Músicas, Albums e Playlists"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </S.WrapperBar>
            </S.Container>
        )

    return (
        <S.Container>
            <S.WrapperBar>
                <FontAwesomeIcon icon={faSearch}/>
                <S.Input 
                    type="text"
                    placeholder="Pesquise por Músicas, Albums e Playlists"
                    onChange={(e) => setQuery(e.target.value)}
                />
            </S.WrapperBar>

            <Title withButton={true}>Músicas</Title>
            {
                result?.tracks?.items.map( (track: any, index: number) => (
                    <CardItem
                        key={index}
                        acessToken={token.acessToken}
                        deviceId={deviceId}
                        path={`/album/${track.album.id}`}
                        contextUri={undefined}
                        image={track.album.images[1].url}
                        uri={track.uri}
                        type="album"
                        title={track.name}
                        artists={track.artists}
                    />
                ))
            }

            <Title withButton={true}>Álbuns</Title>

            {
                result?.albums?.items.map( (album: any, index: number) => (
                    <CardItem
                        key={index}
                        acessToken={token.acessToken}
                        deviceId={deviceId}
                        path={`/album/${album.id}`}
                        contextUri={album.uri}
                        image={album.images[1].url}
                        uri={undefined}
                        type="album"
                        title={album.name}
                        artists={album.artists}
                    />
                ))
            }

            <Title withButton={true}>Playlists</Title>

            {
                result?.playlists?.items.map( (playlist: any, index: number) => (
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