import axios from "axios"

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
