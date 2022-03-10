import { Router, Request, Response } from "express"
import SpotifyWebApi from "spotify-web-api-node"

const CLIENT_ID = 'da91fb72774f451c861801accf5a54dc'
const REDIRECT_URI = 'http://localhost:3000/'
const CLIENT_SECRET = "d52912f96d2d4f2da1510348e3fd3d70"
const routes = Router()

routes.post("/login", async (req: Request, res: Response) => {
    
    const { code } = req.body
    
    const spotifyApi = new SpotifyWebApi({
        redirectUri: REDIRECT_URI,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
    })
    
    try {
        const {body} = await spotifyApi.authorizationCodeGrant(code) 

        const {access_token, refresh_token, expires_in} = body

        res.json({access_token, refresh_token, expires_in})
        
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
})

routes.post("/refresh", async (req: Request, res: Response) => {
    
    const { refreshToken } = req.body
    
    const spotifyApi = new SpotifyWebApi({
        redirectUri: REDIRECT_URI,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken
    })
    
    try {
        const {body} = await spotifyApi.refreshAccessToken() 

        const {access_token, expires_in} = body

        res.json({access_token, expires_in})
        
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
})

export default routes