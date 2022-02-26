import * as S from'./styles'
import BlockHeader from './BlockHeader'
import BlockBody from './BlockBody'


interface PropsDiscoverBlock {
    id: string,
    title: string,
    albums?: any,
    playlists?: any,
    categories?: any
}

export default function DiscoverBlock({id, title, albums, playlists, categories}: PropsDiscoverBlock){

    return (
        <S.Container>
            <BlockHeader id={id} title={title}/>
            <BlockBody id={id} albums={albums} playlists={playlists} categories={categories} />
        </S.Container>
    )
}