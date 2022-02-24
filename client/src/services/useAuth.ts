import { useState, useEffect } from "react"
import axios from "axios"

const URL: String = 'http://localhost:5000'

export function useAuth(code: String){
    const [accessToken, setAccessToken] = useState<String>('')
    const [refreshToken, setRefreshToken] = useState<String>()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {

        (async () => {
            try {
                const {data}: any = await axios.post(`${URL}/login`, {code})
                
                const {access_token, refresh_token, expires_in} = data
                setAccessToken(access_token)
                setRefreshToken(refresh_token)
                setExpiresIn(expires_in)

            } catch (error) {
                console.log(error);
                window.location.href = "/"
            }   
            
        })()

    }, [code])

    useEffect( () => {
        if (!refreshToken || !expiresIn) return

        async function RefreshToken(){
            try {
                const {data}: any = await axios.post(`${URL}/refresh`, {refreshToken}) 

                const {access_token, expires_in} = data
                setAccessToken(access_token)
                setExpiresIn(expires_in)

            } catch (error) {
                console.log(error);
                window.location.href = "/"
            }
        }

        let interval: NodeJS.Timer = setInterval(RefreshToken, (expiresIn - 60) * 1000 ) //tempo de expiração do token 3600 segundos
        return () => clearInterval(interval)

    }, [refreshToken, expiresIn])

    return accessToken
}