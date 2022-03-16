import * as S from'./styles'
import BlockReleases from "./BlockReleases";
import BlockCategories from "./BlockCategories";
import BlockFeatured from "./BlockFeatured";

interface PropsBlockBody {
    id: string,
    albums?: any,
    playlists?: any,
    categories?: any
}

export default function BlockBody({id, albums, playlists, categories}: PropsBlockBody){

    if(albums)
        return (
            <S.Container id={id}>
                <BlockReleases albums={albums}/>
            </S.Container>
        )
    
    if(playlists)
        return (
            <S.Container id={id}>
                <BlockFeatured playlists={playlists}/>
            </S.Container>
        )

    if(categories)
        return (
            <S.Container id={id}>
                <BlockCategories categories={categories}/>
            </S.Container>
        )
    
    return null
}