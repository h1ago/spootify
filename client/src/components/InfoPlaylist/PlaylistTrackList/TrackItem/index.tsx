import * as S from'./styles'
import * as api from '../../../../services/api'
import { useContext } from 'react'
import { DeviceIdContext } from '../../../../context/DeviceIdContext'

interface PropsTrackItem {
    token: string,
    uri: string,
    trackNumber: number,
    trackName: string,
    artists: any,
    album: any,
    durationMs: string
} 

export default function TrackItem(props: PropsTrackItem){
    const {deviceId} = useContext(DeviceIdContext)

    return (
        <S.Container onClick={async () => await api.startPlayback(props.token, deviceId, props.uri)}
        >
            <S.IndexItem>{props.trackNumber}</S.IndexItem>
            <S.TitleItem>
                <S.TrackName>{props.trackName}</S.TrackName>
                <S.ArtistName>
                    {
                        props.artists.map( (artist: any) => (artist.name) )
                    }
                </S.ArtistName>
            </S.TitleItem>
            <S.AlbumName>{props.album.name}</S.AlbumName>
            <S.TimeItem>
                {
                    `${new Date(props.durationMs).getMinutes()}:${String(new Date(props.durationMs).getSeconds()).padStart(2, '0')}`
                }
            </S.TimeItem>
        </S.Container>
    )
}