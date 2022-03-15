import {useState, useEffect, useContext} from "react"
import * as S from'./styles'
import {useParams} from 'react-router-dom';
import Loading from "../../components/Loading"
import { TokenContext } from "../../context/TokenContext"
import { getAlbum } from "../../services/api";
import InfoHeader from "../../components/InfoHeader";
import TrackList from "../../components/TrackList";

export default function Album(){
    const {token} = useContext(TokenContext)
    const [album, setAlbum] = useState<any>()
    const {id} = useParams()

    useEffect(() => {
            if(!id) return 
            (async ()=> {
                const album = await getAlbum(token.acessToken, id)
                setAlbum(album)
            })()
            
    }, [])

    if(!album) 
        return <Loading size={100}/>
        

    return (
        <S.Container>
            <InfoHeader
                image={album.images[1].url}
                type={album.album_type}
                title={album.name}
                artists={album.artists}
                num={album.release_date.slice(0, 4)}
                numberSongs={album.total_tracks}
                tracks={album.tracks.items}
            />

            <TrackList 
                token={token.acessToken}
                tracks={album.tracks.items}
                contextUri={album.uri}
                hasColumnAlbum={false}
            />

        </S.Container>
    )
}