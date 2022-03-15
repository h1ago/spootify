import React from "react"
import * as S from'./styles'

const CLIENT_ID = 'da91fb72774f451c861801accf5a54dc'
const REDIRECT_URL = 'http://localhost:3000/'

export default function Login(){
    const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URL}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`
    
    return (
        <S.Container>
            <S.LogoSpotify src={require('../../assets/spotify-login.jpg')} />
            <S.Button href={AUTH_URL}>Login</S.Button>
        </S.Container>
    )
}