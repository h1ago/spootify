import {useState, useEffect, useContext} from "react"
import * as S from'./styles'
import * as api from '../../services/api'
import {useParams} from 'react-router-dom';
import Loading from "../../components/Loading"
import { TokenContext } from "../../context/TokenContext"
import InfoHeader from "../../components/InfoHeader";
import TrackList from "../../components/TrackList";

export default function Playlist(){
    const {token} = useContext(TokenContext)
    const [playlist, setPlaylist] = useState<any>()
    const {id} = useParams()

    useEffect(() => {
            if(!id) return 
            (async ()=> {
                const album = await api.getPlaylist(token.acessToken, id)
                setPlaylist(album)
            })()
            
    }, [])

    if(!playlist) 
        return <Loading size={100}/>
        

    return (
        <S.Container>
            {/* <InfoPlaylist token={token.acessToken} playlist={playlist} /> */}
            <InfoHeader
                image={playlist.images[0].url}
                type={playlist.type}
                title={playlist.name}
                description={playlist.description}
                name={playlist.owner.display_name }
                num={playlist.followers.total + ' curtidas '}
                numberSongs={playlist.tracks.total}
                tracks={playlist.tracks.items}
            />

            <TrackList 
                token={token.acessToken}
                contextUri={playlist.uri}
                tracks={playlist.tracks.items}
                hasColumnAlbum={true}
            />
        </S.Container>
    )
}