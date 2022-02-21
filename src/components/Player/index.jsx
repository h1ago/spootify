import React from "react"
import * as S from'./styles'

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

export default function Player(){
    return (
        <S.Container>
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

{/* <div className="player">
      <div className="player__album">
        <span />
        <p>Nothing's playing</p>
      </div>
      <div className="player__controls">
        <FontAwesomeIcon icon={faStepBackward} />
        <FontAwesomeIcon icon={faPlayCircle} />
        <FontAwesomeIcon icon={faStepForward} />
      </div>
      <div className="player__seekbar" />
      <div className="player__actions">
        <FontAwesomeIcon icon={faEllipsisH} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faRandom} />
        <FontAwesomeIcon icon={faRetweet} />
        <FontAwesomeIcon icon={faVolumeDown} />
      </div>
    </div> */}