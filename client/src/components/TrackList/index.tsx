import * as S from'./styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClockFour, faPlayCircle } from "@fortawesome/free-solid-svg-icons"
import TrackItem from "./TrackItem"
import { useContext } from 'react'
import { DeviceIdContext } from '../../context/DeviceIdContext'
import { startPlayback } from '../../services/api'

interface PropsTrackList {
    token: string,
    contextUri: string,
    hasColumnAlbum?: boolean,
    hasColumnAddedAt?: boolean,
    tracks: any
} 

export default function TrackList(props: PropsTrackList){
    const {deviceId} = useContext(DeviceIdContext)
    
    return (
        <S.Container>

            <S.ButtonPlay 
                onClick={ async() => await startPlayback(props.token, deviceId, undefined, props.contextUri)}
                icon={faPlayCircle} 
            />

            <S.WrapperHeader>
                <S.IndexItemHeader>#</S.IndexItemHeader>
                <S.TitleItemHeader>Título</S.TitleItemHeader>
                {
                    props.hasColumnAlbum && <S.AlbumItemHeader>Album</S.AlbumItemHeader>
                }
                {
                    props.hasColumnAddedAt && <S.AddedAtItemHeader>Adicionado em</S.AddedAtItemHeader>
                }
                <S.TimeItemHeader><FontAwesomeIcon icon={faClockFour} /></S.TimeItemHeader>
            </S.WrapperHeader>

                {   
                    props.tracks.map( (track: any, index: number) => (
                        <TrackItem 
                            key={index}
                            token={props.token}
                            deviceId={deviceId}
                            uri={props.hasColumnAlbum ? track.track.uri : track.uri}
                            trackNumber={index+1}
                            trackName={props.hasColumnAlbum ? track.track.name : track.name}
                            artists={props.hasColumnAlbum ? track.track.artists : track.artists}
                            durationMs={props.hasColumnAlbum ? track.track.duration_ms : track.duration_ms }
                            albumName={props.hasColumnAlbum ? track.track.album.name : undefined}
                            addedAt={props.hasColumnAddedAt ? track.added_at : undefined}
                        />
                    ) )
                }
        </S.Container>
    )
}