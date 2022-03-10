import * as S from'./styles'
import * as api from '../../services/api'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faPlayCircle } from "@fortawesome/free-solid-svg-icons"
import AlbumHeader from "./AlbumHeader"
import AlbumTrackList from "./AlbumTrackList"
import { useContext } from 'react'
import { DeviceIdContext } from '../../context/DeviceIdContext'

interface PropsInfoAlbum {
    token: string,
    album: any
} 

export default function InfoAlbum({token, album}: PropsInfoAlbum){
    const {deviceId} = useContext(DeviceIdContext)

    return (
        <>
            <AlbumHeader album={album}/>

            <S.Actions>
                <FontAwesomeIcon onClick={ async() => await api.startPlayback(token, deviceId, undefined, album.uri)} icon={faPlayCircle} />
                <FontAwesomeIcon icon={faHeart} />
            </S.Actions>

            <AlbumTrackList token={token} album={album} />
        </>
    )
}