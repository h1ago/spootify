import {useState, useEffect} from "react"
import * as S from'./styles'
import DiscoverBlock from "../../components/DiscoverBlock"
import * as api from '../../services/api'

interface PropsDiscover{
    token: String
}

export default function Discover({token}: PropsDiscover){
    const [albumsReleases, setAlbumsReleases] = useState([])
    const [playlistsFeatured, setPlaylistsFeatured] = useState([])
    const [browseGenres, setBrowseGenres] = useState([])

    useEffect( () => {
        ( async function (){
            try {
                const {albums} = await api.getReleases(token)
                const {playlists} = await api.getFeatured(token)
                const {categories} = await api.getBrowseGenres(token)
                setAlbumsReleases(albums.items)
                setPlaylistsFeatured(playlists.items)
                setBrowseGenres(categories.items)

            } catch (error) {
                console.log(error)
            }
        })()
    }, [] )

    return (
        <S.Container>

            <DiscoverBlock id="releases" title="Lançamentos da Semana" albums={albumsReleases} />

            <DiscoverBlock id="playlists" title="Playlists em Destaque" playlists={playlistsFeatured} />

            <DiscoverBlock id="browse" title="Playlists por Gênero" categories={browseGenres} />

        </S.Container>
    )
}