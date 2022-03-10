import {useState, useEffect, useContext} from "react"
import * as S from'./styles'
import * as api from '../../services/api'
import {useParams} from 'react-router-dom';
import Loading from "../../components/Loading"
import { TokenContext } from "../../context/TokenContext"
import InfoPlaylist from "../../components/InfoPlaylist";

export default function Playlist(){
    const {token} = useContext(TokenContext)
    const [playlist, setPlaylist] = useState<any>()
    const {id} = useParams()

    useEffect(() => {
            if(!id) return 
            (async ()=> {
                const album = await api.getPlaylist(token.acessToken, id)
                console.log(album)
                setPlaylist(album)
            })()
            
    }, [])

    if(!playlist) 
        return <Loading size={100}/>
        

    return (
        <S.Container>
            <InfoPlaylist token={token.acessToken} playlist={playlist} />
        </S.Container>
    )
}