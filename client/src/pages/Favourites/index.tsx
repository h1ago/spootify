import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Loading from "../../components/Loading"
import Title from "../../components/Title"
import TrackList from "../../components/TrackList"
import { TokenContext } from "../../context/TokenContext"
import { getUserSavedTrack } from "../../services/api"
import * as S from'./styles'

export default function Favourites(){
    const [favourites, setFavourites] = useState<any>()
    const {token} = useContext(TokenContext)
    const {state}: any = useLocation()
    const user = state.user
    

    useEffect( () => {
        (async () => {
            const favourites = await getUserSavedTrack(token.acessToken)
            setFavourites(favourites)
        })()
    }, [] )

    if(!favourites) 
        return <Loading size={100}/>

    return (
        <S.Container>
            <Title withButton={false}>Músicas Curtidas</Title>

            <TrackList 
                token={token.acessToken}
                contextUri={favourites.uri}
                tracks={favourites.items}
                hasColumnAlbum={true}
                hasColumnAddedAt={true}
            />

        </S.Container>
    )
}