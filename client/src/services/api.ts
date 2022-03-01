import axios from "axios"
import { useContext } from "react";
import {PlaybackContext, Playback} from "../context/PlaybackContext";


export function getReleases(token: String){
    const LIMIT_ALBUMS = 20;
    const url = `https://api.spotify.com/v1/browse/new-releases?country=BR&limit=${LIMIT_ALBUMS}`
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    
    return axios.get(url, config)
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

export function getBrowseGenres(token: String){
    const LIMIT_ALBUMS = 20;
    const url = `https://api.spotify.com/v1/browse/categories?country=BR&locale=BR&limit=${LIMIT_ALBUMS}`
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    
    return axios.get(url, config)
        .then(response => response.data)
        .catch(error => error)
}

export async function startPlayback(token: any, deviceId: string){
    const url = `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`
    const data = { context_uri: 'spotify:album:5hBNe9L3XC3xU4pDZUtNm3' }
    const config = { headers:{'Authorization': `Bearer ${token}`}}
    
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
