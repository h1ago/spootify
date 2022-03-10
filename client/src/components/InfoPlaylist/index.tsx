import * as S from'./styles'
import * as api from '../../services/api'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faPlayCircle } from "@fortawesome/free-solid-svg-icons"
import PlaylistHeader from "./PlaylistHeader"
import PlaylistTrackList from "./PlaylistTrackList/index"
import { useContext } from 'react'
import { DeviceIdContext } from '../../context/DeviceIdContext'

interface PropsInfoPlaylist {
    token: string,
    playlist: any
} 

export default function InfoPlaylist({token, playlist}: PropsInfoPlaylist){
    const {deviceId} = useContext(DeviceIdContext)

    return (
        <>
            <PlaylistHeader playlist={playlist}/>

            <S.Actions>
                <FontAwesomeIcon onClick={ async() => await api.startPlayback(token, deviceId, undefined, playlist.uri)} icon={faPlayCircle} />
                <FontAwesomeIcon icon={faHeart} />
            </S.Actions>

            <PlaylistTrackList token={token} playlist={playlist} />
        </>
    )
}