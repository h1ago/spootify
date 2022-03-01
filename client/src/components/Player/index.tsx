import React, {useState, useEffect, useContext} from "react"
import * as S from'./styles'
import { startPlayback } from "../../services/api";
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

const SPOTIFY_WEB_PLAYBACK_SDK_URL = "https://sdk.scdn.co/spotify-player.js";

interface PropsPlayer {
    token: string,
    trackUri: string | [string]
}

export default function Player({token, trackUri}: PropsPlayer){
    //Para não ter que utilizar os listeners javascript neste componente e poluí-lo, coloquei
    //as informações úteis em um contexto
    const {playback} = useContext(PlaybackContext)
    const {player, device_id} = WebPlaybackSdk({token})

    async function handleSeek(pos_ms: number){
        const newProgress_ms = await player?.seek(pos_ms)
        return newProgress_ms
    }

    if(!player || !device_id)
        return <Loading size={20}/>
        

    return (
        <S.Container>
            <S.AlbumWrapper>
                <S.Album/>
                <S.Title>Nothing's playing</S.Title>
            </S.AlbumWrapper>

            <S.Controls>
                <FontAwesomeIcon onClick={() => player.previousTrack()} icon={faStepBackward} />
                <FontAwesomeIcon onClick={ () => startPlayback(token, device_id)} icon={faPlayCircle} />
                <FontAwesomeIcon onClick={() => player.nextTrack()} icon={faStepForward} />
            </S.Controls>

            {/* <S.Seekbar>
                <S.Progress size={playback.position} duration={playback.duration}/>
            </S.Seekbar> */}
            <SeekBar handleSeek={handleSeek} progress_ms={playback.position} duration_ms={playback.duration} />

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