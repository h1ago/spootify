import * as S from'./styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClockFour } from "@fortawesome/free-solid-svg-icons"
import TrackItem from "./TrackItem"

interface PropsPlaylistTrackList {
    token: string,
    playlist: any
} 

export default function PlaylistTrackList({playlist, token}: PropsPlaylistTrackList){

    return (
        <S.Container>
            <S.WrapperHeader>
                <S.IndexItemHeader>#</S.IndexItemHeader>
                <S.TitleItemHeader>Título</S.TitleItemHeader>
                <S.AlbumItemHeader>Album</S.AlbumItemHeader>
                <S.TimeItemHeader><FontAwesomeIcon icon={faClockFour} /></S.TimeItemHeader>
            </S.WrapperHeader>

                {
                    playlist.tracks.items.map( ({track}: any, index: number) => (
                        <TrackItem 
                            key={index}
                            token={token}
                            uri={track.uri}
                            trackNumber={index+1}
                            trackName={track.name}
                            artists={track.artists}
                            album={track.album}
                            durationMs={track.duration_ms}
                        />
                    ) )
                }     
        </S.Container>
    )
}