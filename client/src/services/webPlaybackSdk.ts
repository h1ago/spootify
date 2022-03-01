import {useState, useEffect, useContext} from 'react'
import { PlaybackContext } from '../context/PlaybackContext';
import { updateStatePlayback } from './api';

interface PropsWebPlaybackSdk {
    token: string
}
const SPOTIFY_WEB_PLAYBACK_SDK_URL = "https://sdk.scdn.co/spotify-player.js"

export default function WebPlaybackSdk({token}: PropsWebPlaybackSdk){
    let [device_id, setDeviceId] = useState<string>('')
    let [position, setPosition] = useState<number>(0);
    let [player, setPlayer] = useState<Spotify.Player>()
    let {setPlayback} = useContext(PlaybackContext)

    useEffect(() => {
 
        // carregando o script web play sdk.
        const script = document.createElement("script");
        script.async = true;
        script.src = SPOTIFY_WEB_PLAYBACK_SDK_URL;
        document.body.appendChild(script);
        
        //Inicia o player
        window.onSpotifyWebPlaybackSDKReady = () => {
            //Cria a instancia do player
            const spotifyPlayer = new Spotify.Player({
                name: 'Spootify Player',
                getOAuthToken: cb => { cb(token); }
            });
            
            // Ready
            spotifyPlayer.addListener("ready", ({device_id}) => {
                console.log("Ready with Device ID", device_id);
                setDeviceId(device_id)
                setPlayer(spotifyPlayer)
            });
    
            // Not Ready
            spotifyPlayer.addListener("not_ready", ({ device_id }) => {
                console.log("Device ID has gone offline", device_id);
            });
            spotifyPlayer.addListener('player_state_changed', ({
                track_window: { current_track: {name, album, artists} },
                ...state
            }) => {
                /* const current_track = {name, album, artists} */
                const playback = {
                    position: state.position,
                    duration: state.duration
                }

                /* const playback = {
                    device_id: device_id,
                    is_active: false,
                    paused: state.paused,
                    position: state.position,
                    shuffle: state.shuffle,
                    loading: state.loading,
                    duration: state.duration,
                    current_track: current_track
                } */
                
                setPlayback(playback)

                spotifyPlayer.getCurrentState().then( state => { 
                    (!state)? setPosition(0) : setPosition(state.position) 
                });
            });
    
            //Mostrar os erros que podem acontecer durante a inicialização 
            spotifyPlayer.addListener('initialization_error', ({ message }) => { 
                console.error(message);
            });
    
            spotifyPlayer.addListener('authentication_error', ({ message }) => {
                console.error(message);
            });
    
            spotifyPlayer.addListener('account_error', ({ message }) => {
                console.error(message);
            });
    
            // Conectar o player
            spotifyPlayer.connect();
        }

    }, [token]);

    useEffect( () => {
        if(player){
            (async () => {
                const statePlayback = await updateStatePlayback(token)
                setPosition(statePlayback.progress_ms)
                setPlayback({
                    position: statePlayback.progress_ms,
                    duration: statePlayback.item.duration_ms | 0
                })
                
    
            })()
        }
    }, [position])


    return {player, device_id}
}

