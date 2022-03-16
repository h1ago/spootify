import { useEffect, useContext } from "react"
import axios from "axios"
import { TokenContext, Token } from "../context/TokenContext"

const URL: String = 'http://localhost:5000'


export default function useAuth(code: string){
    const {token, setToken} = useContext(TokenContext)

    useEffect(() => {

        (async () => {

            try {
                const {data}: any = await axios.post(`${URL}/login`, {code}) 
                const {access_token, refresh_token, expires_in} = data
                const token: Token = {
                    acessToken: access_token,
                    refreshToken: refresh_token,
                    expiresIn: expires_in
                }
                setToken(token)

            } catch (error) {
                window.location.href = "/"
            }   
            
        })()

    }, [code])

    useEffect( () => {
        if (!token.refreshToken || !token.expiresIn) return

        async function RefreshToken(){
            try {
                const {data}: any = await axios.post(`${URL}/refresh`, token.refreshToken) 

                const {access_token, expires_in} = data
                const newToken: Token = {
                    acessToken: access_token,
                    refreshToken: token.refreshToken,
                    expiresIn: expires_in
                }
                setToken(newToken)

            } catch (error) {
                window.location.href = "/"
            }
        }

        let interval: NodeJS.Timer = setInterval(RefreshToken, (token.expiresIn - 60) * 1000 ) //tempo de expiração do token 3600 segundos
        return () => clearInterval(interval)

    }, [token.refreshToken, token.expiresIn])

}