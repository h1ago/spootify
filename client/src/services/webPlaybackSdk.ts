import { resolve } from 'path/posix';
import React, {useState, useEffect, useContext} from 'react'
import Player from '../components/Player';
import { Playback, PlaybackContext } from '../context/PlaybackContext';
import { updateStatePlayback } from './api';

export type PlayerSpotify = Spotify.Player & {deviceId: string} | null

/* interface PropsWebPlaybackSdk {
    token: string,
    setPlayer: React.Dispatch<React.SetStateAction<PlayerSpotify>>,
    setPlayback: React.Dispatch<React.SetStateAction<Playback>>
} */

interface PropsWebPlaybackSdk {
    token: string,
    player: React.MutableRefObject<Spotify.Player | undefined>
    deviceId: React.MutableRefObject<string | undefined>,
    setPlayback: React.Dispatch<React.SetStateAction<Playback>>
}

export default function WebPlaybackSdk(props: PropsWebPlaybackSdk){
    
    console.log('ENTROU')
    loadSpotifyPlayer();
        
    //Inicia o player
    if (!window.onSpotifyWebPlaybackSDKReady) {
        window.onSpotifyWebPlaybackSDKReady = () => initializePlayer(props)
    } else {
        initializePlayer(props)
    }
    
}

// carregando o script web play sdk.
function loadSpotifyPlayer(){
        const script = document.createElement("script")
        script.async = true
        script.src = 'https://sdk.scdn.co/spotify-player.js'
        document.body.appendChild(script);
}

function initializePlayer(props: PropsWebPlaybackSdk): void{

    //Cria a instancia do player
    let spotifyPlayer = new window.Spotify.Player({
        name: 'Spootify Player',
        getOAuthToken: cb => { cb(props.token); }
    })
    //Ready player
    spotifyPlayer.addListener("ready", ({device_id}) => {
        /* console.log("Ready with Device ID", device_id); */
        props.player.current = spotifyPlayer
        props.deviceId.current = device_id
        console.log(props.player.current)
        console.log(spotifyPlayer)
    })
    spotifyPlayer.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
    })
    spotifyPlayer.addListener('player_state_changed', ({
        track_window: { current_track: {name, album, artists} },
        ...state
    }) => {
        const current_track = {name, album, artists}
        let isPlaying = false
        if(!state.paused && !state.loading && state.position > 0)
            isPlaying = true

        const playback: Playback  = {
            isPaused: state.paused,
            position: state.position,
            duration: state.duration,
            currentTrack: current_track,
            isPlaying: isPlaying
        }
        
        props.setPlayback(playback)
    });

    //Erros que podem acontecer durante a inicialização 
    spotifyPlayer.addListener('initialization_error', ({ message }) => { 
        console.error(message)
    })
    spotifyPlayer.addListener('authentication_error', ({ message }) => {
        console.error(message)
    })
    spotifyPlayer.addListener('account_error', ({ message }) => {
        console.error(message)
    })

    // Conectar o player
    spotifyPlayer.connect()
}
