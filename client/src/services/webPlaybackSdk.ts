import React, {useEffect, useContext} from 'react'
import { DeviceIdContext } from '../context/DeviceIdContext';
import { Playback } from '../context/PlaybackContext';


interface PropsWebPlaybackSdk {
    token: string,
    setPlayback: React.Dispatch<React.SetStateAction<Playback>>
}

export default function WebPlaybackSdk({token, setPlayback}: PropsWebPlaybackSdk){
    const {setDeviceId} = useContext(DeviceIdContext)
    
    useEffect(() => {
        loadSpotifyPlayer();
        
        //Inicia o player
        if (!window.onSpotifyWebPlaybackSDKReady) {
            window.onSpotifyWebPlaybackSDKReady = () => initializePlayer(token, setDeviceId, setPlayback)
        } else {
            initializePlayer(token, setDeviceId, setPlayback)
        }
    }, [token])
}

// carregando o script web play sdk.
function loadSpotifyPlayer(){
        const script = document.createElement("script")
        script.async = true
        script.src = 'https://sdk.scdn.co/spotify-player.js'
        document.body.appendChild(script);
}

function initializePlayer(
        token: string, 
        setDeviceId: React.Dispatch<React.SetStateAction<string>>,
        setPlayback: React.Dispatch<React.SetStateAction<Playback>>,
    ): void{

    //Cria a instancia do player
    let spotifyPlayer = new window.Spotify.Player({
        name: 'Spootify Player',
        getOAuthToken: cb => { cb(token); }
    })
    //Ready player
    spotifyPlayer.addListener("ready", async ({device_id}) => {
        setDeviceId(device_id)
    })
    spotifyPlayer.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
    })
    spotifyPlayer.addListener('player_state_changed', ({
        track_window: { current_track: {name, album, artists, uri, id} },
        ...state
    }) => {

        const current_track = {name, album, artists, uri, id}
        let isPlaying = false
        if(!state.paused && !state.loading && state.position > 0)
            isPlaying = true
            
        const playback: Playback  = {
            isPaused: state.paused,
            position: state.position,
            duration: state.duration,
            repeat: state.repeat_mode,
            shuffle: state.shuffle,
            currentTrack: current_track,
            isPlaying: isPlaying
        }
        
        setPlayback(playback)
    });

    //Handle errors 
    spotifyPlayer.addListener('initialization_error', ({ message }) => { 
        console.error(message)
    })
    spotifyPlayer.addListener('authentication_error', ({ message }) => {
        console.error(message)
    })
    spotifyPlayer.addListener('account_error', ({ message }) => {
        console.error(message)
        setDeviceId('Premium User Required')
    })

    // Conectar o player
    spotifyPlayer.connect()
}
