import * as S from'./styles'
import { startPlayback } from '../../../services/api'

interface PropsTrackItem {
    token: string,
    deviceId: string,
    uri: string,
    trackNumber: number,
    trackName: string,
    albumName: string,
    addedAt: string,
    artists: any,
    durationMs: string
} 

export default function TrackItem(props: PropsTrackItem){

    return (
        <S.Container onClick={async () => await startPlayback(props.token, props.deviceId, props.uri, undefined)}
        >
            <S.IndexItem>{props.trackNumber}</S.IndexItem>
            <S.TitleItem>
                <S.TrackName>{props.trackName}</S.TrackName>
                <S.ArtistName>
                    {
                        props.artists.map( (artist: any, index: number) => (index == 0 ? artist.name : `, ${artist.name}`) )
                    }
                </S.ArtistName>
            </S.TitleItem>
            {
                props.albumName &&
                <S.AlbumName>{props.albumName}</S.AlbumName>
            }
            {
                props.addedAt &&
                <S.AddedAt>
                    {new Date(props.addedAt).toLocaleDateString(
                        'pt-BR', 
                        {day: 'numeric', month: 'short', year: 'numeric'}
                    )}
                </S.AddedAt>
            }
            <S.TimeItem>
                {
                    `${new Date(props.durationMs).getMinutes()}:${String(new Date(props.durationMs).getSeconds()).padStart(2, '0')}`
                }
            </S.TimeItem>
        </S.Container>
    )
}