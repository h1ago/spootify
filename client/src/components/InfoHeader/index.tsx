import * as S from'./styles'

interface PropsInfoHeader {
    image: string,
    type: string,
    title: string,
    name?: string,
    num: string,
    numberSongs: number,
    tracks: [any],
    description?: string,
    artists?: [any],

}

export default function InfoHeader(props: PropsInfoHeader){

    function getTime(){
        let ms = 0
        
        props.tracks.forEach( (track: any) => (ms += (props.type == 'playlist' ? track.track?.duration_ms : track.duration_ms))) 
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
            <S.Image src={props.image}/>
            <S.Wrapper>
                <S.Type>{props.type}</S.Type>
                <S.Title>{props.title}</S.Title>
                {props.description && <S.Description>{props.description}</S.Description>}
                <S.SubTitle>
                {
                    props.artists
                    ?<S.Name>{props.artists.map((artist: { name: string }, index: number) => ( 
                        index > 0 ? ' ● ' + artist.name : artist.name + ' '))
                    }</S.Name>
                    :<S.Name>{props.name}</S.Name>
                }
                    <S.NumberGeneric>{` • ${props.num} • `}</S.NumberGeneric>
                    <S.NumberSongs>{`${props.numberSongs} ` + (props.numberSongs > 1 ? 'músicas, ' : 'música, ')}</S.NumberSongs>
                    <S.TotalTime>{getTime()}</S.TotalTime>
                </S.SubTitle>
            </S.Wrapper>
        </S.Container>
    )
}