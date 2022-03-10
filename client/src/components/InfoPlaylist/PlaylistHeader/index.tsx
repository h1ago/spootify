import * as S from'./styles'

interface PropsPlaylistHeader {
    playlist: any
}

export default function PlaylistHeader({playlist}: PropsPlaylistHeader){

    function getTimePlaylist(){
        let ms = 0
        playlist.tracks.items.forEach( ({track}: any) => (ms += track.duration_ms) )
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
            <S.Image src={playlist.images[0].url}/>
            <S.Wrapper>
                <S.Type>{playlist.type}</S.Type>
                <S.Title>{playlist.name}</S.Title>
                <S.Description>{playlist.description}</S.Description>
                <S.NameArtist>
                        {
                            playlist.owner.display_name + ' • '
                        }
                        
                        {   playlist.followers.total + ' curtidas • '}
                        
                        {playlist.tracks.total + ' ' + (playlist.tracks.total > 1 ? 'músicas' : 'música')}
                        , {getTimePlaylist()}
                </S.NameArtist>
            </S.Wrapper>
        </S.Container>
    )
}