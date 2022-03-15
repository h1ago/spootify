import axios from "axios"
import { Playback } from "../context/PlaybackContext";

export async function getUser(token: String){
    const url = `https://api.spotify.com/v1/me`
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    
    return await axios.get(url, config)
        .then(response => response.data)
        .catch(error => error)
}

export async function getSearch(token: string, query: string){
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track,album,playlist&limit=7`
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    
    return await axios.get(url, config)
        .then(response => response.data)
        .catch(error => {throw new Error(error)})
}

export async function getReleases(token: String){
    const LIMIT_ALBUMS = 20;
    const url = `https://api.spotify.com/v1/browse/new-releases?country=BR&limit=${LIMIT_ALBUMS}`
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    
    return await axios.get(url, config)
        .then(response => response.data)
        .catch(error => error)
}

export function getFeatured(token: String){
    const LIMIT_ALBUMS = 20;
    const url = `https://api.spotify.com/v1/browse/featured-playlists?country=BR&limit=${LIMIT_ALBUMS}`
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    
    return axios.get(url, config)
        .then(response => response.data)
        .catch(error => error)
}

export function getBrowseGenres(token: string){
    const LIMIT_ALBUMS = 20;
    const url = `https://api.spotify.com/v1/browse/categories?country=BR&locale=BR&limit=${LIMIT_ALBUMS}`
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    
    return axios.get(url, config)
        .then(response => response.data)
        .catch(error => error)
}

export async function getPlaylistsGenre(token: string, id: string){
    const url = `https://api.spotify.com/v1/browse/categories/${id}/playlists`
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    
    return await axios.get(url, config)
        .then(response => response.data.playlists)
        .catch(error => error)
}

export async function getAlbum(token: string, id: string){
    const url = `https://api.spotify.com/v1/albums/${id}`
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    
    return await axios.get(url, config)
        .then(response => response.data)
        .catch(error => error)
}

export async function getPlaylist(token: string, id: string){
    const url = `https://api.spotify.com/v1/playlists/${id}`
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    
    return await axios.get(url, config)
        .then(response => response.data)
        .catch(error => error)
}

export async function getUserSavedTrack(token: string){
    const url = `https://api.spotify.com/v1/me/tracks`
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    
    return await axios.get(url, config)
        .then(response => response.data)
        .catch(error => error)
}

export async function startPlayback(token: string, deviceId: string, uri?: string, contextUri?: string){
    const url = `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`
    let data
    if(!uri)
        data = { context_uri: contextUri}
    else
        data = { uris: [uri]}

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return await axios.put(url, data, config)
        .then(response => response.data)
        .catch(error => error)
}


export async function updateStatePlayback(token: any){
    const url = `https://api.spotify.com/v1/me/player`
    const config = { headers:{'Authorization': `Bearer ${token}`}}
    
    return await axios.get(url, config)
        .then(response => response.data)
        .catch(error => error)
}

export async function skipToNext(token: string){
    const url = `https://api.spotify.com/v1/me/player/next`

    const instance = axios.create({
        headers:{'Authorization': `Bearer ${token}`}
    })
    return await instance.post(url)
        .then(response => response.data)
        .catch(error => error)
}

export async function skipToPrevious(token: string){
    const url = `https://api.spotify.com/v1/me/player/previous`

    const instance = axios.create({
        headers:{'Authorization': `Bearer ${token}`}
    })
    return await instance.post(url)
        .then(response => response.data)
        .catch(error => error)
}

export async function pause(token: string){
    const url = `https://api.spotify.com/v1/me/player/pause`

    const instance = axios.create({
        headers:{'Authorization': `Bearer ${token}`}
    })
    return await instance.put(url)
        .then(response => response.data)
        .catch(error => error)
}

export async function resume(token: string, deviceId: string){
    const url = `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`

    const instance = axios.create({
        headers:{'Authorization': `Bearer ${token}`}
    })
    return await instance.put(url)
        .then(response => response.data)
        .catch(error => error)
}

export async function isSavedTrack(token: string, id: any){
    if (!id) return null
    const url = `https://api.spotify.com/v1/me/tracks/contains?ids=${id}`

    const instance = axios.create({
        headers:{'Authorization': `Bearer ${token}`}
    })
    return await instance.get(url)
        .then(response => response.data)
        .catch(error => error)
}

export async function saveTrack(token: string, id: any){
    if (!id) return null
    const url = `https://api.spotify.com/v1/me/tracks/?ids=${id}`

    const instance = axios.create({
        headers:{'Authorization': `Bearer ${token}`}
    })
    return await instance.put(url)
        .then(response => response.data)
        .catch(error => error)
}

export async function removeTrack(token: string, id: any){
    if (!id) return null
    const url = `https://api.spotify.com/v1/me/tracks/?ids=${id}`

    const instance = axios.create({
        headers:{'Authorization': `Bearer ${token}`}
    })
    return await instance.delete(url)
        .then(response => response.data)
        .catch(error => error)
}

export async function repeat(token: string, playback: Playback){
    let state = 'track'
    if(playback.repeat != 0)
        state = 'off'

    const url = `https://api.spotify.com/v1/me/player/repeat?state=${state}`

    const instance = axios.create({
        headers:{'Authorization': `Bearer ${token}`}
    })
    return await instance.put(url)
        .then(response => response.data)
        .catch(error => error)
}

export async function shuffle(token: string, playback: Playback){
    const url = `https://api.spotify.com/v1/me/player/shuffle?state=${!playback.shuffle}`

    const instance = axios.create({
        headers:{'Authorization': `Bearer ${token}`}
    })
    return await instance.put(url)
        .then(response => response.data)
        .catch(error => error)
}

export async function changeVolume(token: string, percent: number){
    const url = `https://api.spotify.com/v1/me/player/volume?volume_percent=${percent}`

    const instance = axios.create({
        headers:{'Authorization': `Bearer ${token}`}
    })
    return await instance.put(url)
        .then(response => response.data)
        .catch(error => error)
}

export async function seekToPosition(token: string, position: number){
    const url = `https://api.spotify.com/v1/me/player/seek?position_ms=${position}`

    const instance = axios.create({
        headers:{'Authorization': `Bearer ${token}`}
    })
    return await instance.put(url)
        .then(response => response.data)
        .catch(error => error)
}