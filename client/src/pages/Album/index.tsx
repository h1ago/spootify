import {useState, useEffect, useContext} from "react"
import * as S from'./styles'
import * as api from '../../services/api'
import {useParams} from 'react-router-dom';
import Loading from "../../components/Loading"
import { TokenContext } from "../../context/TokenContext"
import InfoAlbum from "../../components/InfoAlbum";

export default function Album(){
    const {token} = useContext(TokenContext)
    const [album, setAlbum] = useState<any>()
    const {id} = useParams()

    useEffect(() => {
            if(!id) return 
            (async ()=> {
                const album = await api.getAlbum(token.acessToken, id)
                console.log(album)
                setAlbum(album)
            })()
            
    }, [])

    if(!album) 
        return <Loading size={100}/>
        

    return (
        <S.Container>
            <InfoAlbum token={token.acessToken} album={album} />
        </S.Container>
    )
}