import {useState, useEffect, useContext} from "react"
import * as S from'./styles'
import DiscoverBlock from "../../components/DiscoverBlock"
import * as api from '../../services/api'
import { TokenContext } from "../../context/TokenContext"


export default function Discover(){
    const {token} = useContext(TokenContext)
    const [albumsReleases, setAlbumsReleases] = useState([])
    const [playlistsFeatured, setPlaylistsFeatured] = useState([])
    const [browseGenres, setBrowseGenres] = useState([])

    useEffect( () => {
        ( async function (){
            try {
                const data = await api.getReleases(token.acessToken)
                const {albums} = data
                const {playlists} = await api.getFeatured(token.acessToken)
                const {categories} = await api.getBrowseGenres(token.acessToken)
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