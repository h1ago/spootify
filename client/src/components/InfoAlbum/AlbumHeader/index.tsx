import * as S from'./styles'

interface PropsAlbumHeader {
    album: any
}

export default function AlbumHeader({album}: PropsAlbumHeader){

    function getTimeAlbum(){
        let ms = 0
        album.tracks.items.forEach( (track: any) => (ms += track.duration_ms) )
        const seconds = Math.floor((ms / 1000) % 60)
        const minutes = Math.floor((ms / (60 * 1000)) % 60)
        const hours = Math.floor((ms / (3600 * 1000)) % 3600)

        if(hours > 0)
            return `${hours}h ${minutes}min`
        else 
            return `${minutes}min ${seconds}s`
    }

    return (
        <S.Container>
            <S.Image src={album.images[1].url}/>
            <S.Wrapper>
                <S.Type>{album.album_type}</S.Type>
                <S.Title>{album.name}</S.Title>
                <S.NameArtist>
                        {
                            album.artists.map((artist: { name: string }, index: number) => ( index > 0 ? ' ● ' + artist.name : artist.name + ' '))
                        }
                        
                        {' • ' + album.release_date.slice(0, 4) + ' • '}
                        
                        {album.total_tracks + ' ' + (album.total_tracks > 1 ? 'músicas' : 'música')}
                        , {getTimeAlbum()}
                </S.NameArtist>
            </S.Wrapper>
        </S.Container>
    )
}