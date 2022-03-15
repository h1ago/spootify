import { useContext } from "react"
import * as S from'./styles'
import { pause, repeat, resume, shuffle, skipToNext, skipToPrevious } from "../../services/api";
import WebPlaybackSdk from "../../services/webPlaybackSdk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faStepForward,
    faPlayCircle,
    faPauseCircle,
    faStepBackward,
    faEllipsisH,
    faRandom,
    faRetweet
} from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading";
import { PlaybackContext } from "../../context/PlaybackContext";
import SeekBar from "./SeekBar";
import VolumeButton from "./VolumeButton";
import { TokenContext } from "../../context/TokenContext";
import { DeviceIdContext } from "../../context/DeviceIdContext";
import LikeSongButton from "./LikeSongButon";
import Error from "../Error";




export default function Player(){
    const {token} = useContext(TokenContext)
    const {deviceId} = useContext(DeviceIdContext)
    const {playback, setPlayback} = useContext(PlaybackContext)
    WebPlaybackSdk({token: token.acessToken, setPlayback})

    if(deviceId == 'Premium User Required')
        return <Error>Webplayer disponível apenas para usuários spotify premium</Error>

    if(!deviceId) 
        return <Loading size={20}/>

    return (
        <S.Container>
            <S.AlbumWrapper>
                <S.Album src={playback.currentTrack?.album.images[1].url}/>
                <S.Title>{
                    playback.currentTrack 
                    ? <><span>{playback?.currentTrack.name}</span>  -  {playback?.currentTrack.artists.map(artist => ' ' + artist.name)}</>
                    : "Nenhuma música"
                }
                </S.Title>
            </S.AlbumWrapper>

            <S.Controls>
                <FontAwesomeIcon onClick={async () => await skipToPrevious(token.acessToken)} icon={faStepBackward} />
                <FontAwesomeIcon 
                    onClick={ async () => playback.isPaused ? await resume(token.acessToken, deviceId) : await pause(token.acessToken)} 
                    icon={playback.isPlaying ? faPauseCircle : faPlayCircle} 
                />
                <FontAwesomeIcon onClick={async () => skipToNext(token.acessToken)} icon={faStepForward} />
            </S.Controls>
            
            <SeekBar
                token={token.acessToken}
                position={playback.position}
                duration={playback.duration}
                isPlaying={playback.isPlaying}
            />

            <S.ActionsControl>
                {/* <FontAwesomeIcon icon={faEllipsisH} /> */}
                <LikeSongButton
                    token={token.acessToken}
                    id={playback.currentTrack?.id}
                />

                <FontAwesomeIcon 
                    onClick={async () => await shuffle(token.acessToken, playback)}
                    color={playback.shuffle ? '#ff7b00' : '#39383D'}
                    icon={faRandom} 
                />
                <FontAwesomeIcon
                    onClick={async () => await repeat(token.acessToken, playback)}
                    color={playback.repeat !=0 ? '#ff7b00' : '#39383D'}
                    icon={faRetweet} 
                />
                <VolumeButton token={token.acessToken} />
            </S.ActionsControl>
        </S.Container>
    )
}