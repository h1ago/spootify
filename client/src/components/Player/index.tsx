import React, {useState, useEffect, useContext, useRef} from "react"
import * as S from'./styles'
import { startPlayback } from "../../services/api";
import WebPlaybackSdk, { PlayerSpotify } from "../../services/webPlaybackSdk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faStepForward,
    faPlayCircle,
    faPauseCircle,
    faStepBackward,
    faEllipsisH,
    faHeart,
    faRandom,
    faRetweet,
    faVolumeDown
} from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading";
import { PlaybackContext } from "../../context/PlaybackContext";
import SeekBar from "./SeekBar";

const SPOTIFY_WEB_PLAYBACK_SDK_URL = "https://sdk.scdn.co/spotify-player.js";


interface PropsPlayer {
    token: string,
    trackUri: string | [string]
}

export default function Player({token, trackUri}: PropsPlayer){
    const {playback, setPlayback} = useContext(PlaybackContext)
    const player = useRef<Spotify.Player>()
    const deviceId = useRef<string>('')
    
    useEffect( () => {
        WebPlaybackSdk({token, player, deviceId, setPlayback})
    }, [])

    async function handleSeek(positionMs: number, positionPercent: number){
        if(player.current != null){
            await player.current.seek(positionMs)
            setPlayback({
                isPaused: false,
                isPlaying: true,
                position: positionPercent,
                duration: playback.duration
            }) 
        }
    }

    if(player.current == null && deviceId.current == null) 
        return <Loading size={20}/>

    return (
        <S.Container>
            <S.AlbumWrapper>
                <S.Album/>
                <S.Title>Nothing's playing</S.Title>
            </S.AlbumWrapper>

            <S.Controls>
                <FontAwesomeIcon onClick={() => player?.current?.previousTrack()} icon={faStepBackward} />
                <FontAwesomeIcon onClick={ () => startPlayback(token, deviceId.current)} icon={faPlayCircle} />
                <FontAwesomeIcon onClick={() => player?.current?.nextTrack()} icon={faStepForward} />
            </S.Controls>
            
            <SeekBar handleSeek={handleSeek}/>

            <S.ActionsControl>
                <FontAwesomeIcon icon={faEllipsisH} />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faRandom} />
                <FontAwesomeIcon icon={faRetweet} />
                <FontAwesomeIcon icon={faVolumeDown} />
            </S.ActionsControl>
        </S.Container>
    )
}