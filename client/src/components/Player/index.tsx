import React, {useState, useEffect, useContext, useRef} from "react"
import * as S from'./styles'
import * as API from "../../services/api";
import WebPlaybackSdk from "../../services/webPlaybackSdk";
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
import Volume from "./Volume";
import { TokenContext } from "../../context/TokenContext";
import { DeviceIdContext } from "../../context/DeviceIdContext";

const SPOTIFY_WEB_PLAYBACK_SDK_URL = "https://sdk.scdn.co/spotify-player.js";


export default function Player(){
    const {token} = useContext(TokenContext)
    const {deviceId} = useContext(DeviceIdContext)
    const {playback, setPlayback} = useContext(PlaybackContext)
    WebPlaybackSdk({token: token.acessToken, setPlayback})

    async function handleSeek(positionMs: number, positionPercentage: number){
        setPlayback({
            isPaused: false,
            isPlaying: true,
            repeat: playback.repeat,
            position: positionPercentage,
            shuffle: playback.shuffle,
            duration: playback.duration
        }) 
    }

    if(!deviceId) 
        return <Loading size={20}/>

    return (
        <S.Container>
            <S.AlbumWrapper>
                <S.Album src={playback.currentTrack?.album.images[1].url}/>
                <S.Title>{
                    playback.currentTrack 
                    ? <><span>{playback?.currentTrack.name}</span>  -  {playback?.currentTrack.artists.map(artist => ' ' + artist.name)}</>
                    : "Nothing's playing"
                }
                </S.Title>
            </S.AlbumWrapper>

            <S.Controls>
                <FontAwesomeIcon onClick={() => API.skipToPrevious(token.acessToken)} icon={faStepBackward} />
                <FontAwesomeIcon 
                    onClick={ () => playback.isPaused ? API.resume(token.acessToken, deviceId) : API.pause(token.acessToken)} 
                    icon={playback.isPlaying ? faPauseCircle : faPlayCircle} 
                />
                <FontAwesomeIcon onClick={() => API.skipToNext(token.acessToken)} icon={faStepForward} />
            </S.Controls>
            
            <SeekBar handleSeek={handleSeek}/>

            <S.ActionsControl>
                <FontAwesomeIcon icon={faEllipsisH} />
                <FontAwesomeIcon 
                    onClick={() => API.saveTrack}
                    icon={faHeart}
                />
                <FontAwesomeIcon 
                    onClick={() => API.shuffle(token.acessToken, playback)}
                    color={playback.shuffle ? '#ff7b00' : '39383D'}
                    icon={faRandom} 
                />
                <FontAwesomeIcon
                    onClick={() => API.repeat(token.acessToken, playback)}
                    color={playback.repeat !=0 ? '#ff7b00' : '39383D'}
                    icon={faRetweet} 
                    
                />
                {/* <FontAwesomeIcon 
                    icon={faVolumeDown} 
                /> */}

                <Volume/>
            </S.ActionsControl>
        </S.Container>
    )
}