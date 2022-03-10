import * as S from'./styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClockFour } from "@fortawesome/free-solid-svg-icons"
import TrackItem from "./TrackItem"

interface PropsAlbumTrackList {
    token: string,
    album: any
} 

export default function AlbumTrackList({album, token}: PropsAlbumTrackList){

    return (
        <S.Container>
            <S.WrapperHeader>
                <S.IndexItemHeader>#</S.IndexItemHeader>
                <S.TitleItemHeader>Título</S.TitleItemHeader>
                <S.TimeItemHeader><FontAwesomeIcon icon={faClockFour} /></S.TimeItemHeader>
            </S.WrapperHeader>

                {
                    album.tracks.items.map( (track: any, index: number) => (
                        <TrackItem 
                            key={index}
                            token={token}
                            uri={track.uri}
                            trackNumber={track.track_number}
                            trackName={track.name}
                            artists={track.artists}
                            durationMs={track.duration_ms}
                        />
                    ) )
                }     
        </S.Container>
    )
}