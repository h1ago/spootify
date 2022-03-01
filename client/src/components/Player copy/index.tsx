import React, {useState, useEffect, useContext} from "react"
import * as S from'./styles'
import { ThemeContext } from 'styled-components'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faStepForward,
    faPlayCircle,
    faStepBackward,
    faEllipsisH,
    faHeart,
    faRandom,
    faRetweet,
    faVolumeDown
} from "@fortawesome/free-solid-svg-icons";


interface PropsPlayer {
    token: any,
    trackUri: string | [string]
}

export default function Player({token, trackUri}: PropsPlayer){
    const [play, setPlay] = useState<boolean>(false)
    const theme = useContext(ThemeContext)

    useEffect(() => {
        setPlay(true)
    }, [trackUri])


    if (!token) return null;

    return (
        <S.Container>
            
            {/* <SpotifyPlayer
                token={token}
                callback={state => !state.isPlaying && setPlay(false)}
                uris={trackUri ? trackUri : []}
                play={play}
                styles={{
                bgColor: '#F5F5F5',
                color: theme.secondary,
                sliderColor: theme.primary,
                sliderHandleColor: theme.primary,
                trackNameColor: '#fff',
                }}
            /> */}

            <S.AlbumWrapper>
                <S.Album/>
                <S.Title>Nothing's playing</S.Title>
            </S.AlbumWrapper>

            <S.Controls>
                <FontAwesomeIcon icon={faStepBackward} />
                <FontAwesomeIcon icon={faPlayCircle} />
                <FontAwesomeIcon icon={faStepForward} />
            </S.Controls>

            <S.Seekbar/>

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

{/* <S.AlbumWrapper>
                <S.Album/>
                <S.Title>Nothing's playing</S.Title>
            </S.AlbumWrapper>

            <S.Controls>
                <FontAwesomeIcon icon={faStepBackward} />
                <FontAwesomeIcon icon={faPlayCircle} />
                <FontAwesomeIcon icon={faStepForward} />
            </S.Controls>

            <S.Seekbar/>

            <S.ActionsControl>
                <FontAwesomeIcon icon={faEllipsisH} />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faRandom} />
                <FontAwesomeIcon icon={faRetweet} />
                <FontAwesomeIcon icon={faVolumeDown} />
            </S.ActionsControl> */}