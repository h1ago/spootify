import React, { useContext } from "react"
import * as S from'./styles'
import { TrackContext } from "../../../../context/TrackContext";
import { startPlayback } from "../../../../services/api";
import { DeviceIdContext } from "../../../../context/DeviceIdContext";
import { TokenContext } from "../../../../context/TokenContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

interface PropsFeatured {
    playlists: any
}

export default function BlockBody({playlists}: PropsFeatured){
    const {token} = useContext(TokenContext)
    const {deviceId} = useContext(DeviceIdContext)

    return (
        <>
            {
                playlists.map( (playlist: any, index: number) => (

                    <S.Item 
                        key={index}
                        to={`/playlist/${playlist.id}`}
                    >
                        <S.Image src={playlist.images[0].url} />

                        <S.PlayButton 
                            onClick={ async (e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                await startPlayback(token.acessToken, deviceId, undefined, playlist.uri)
                            }}
                        >
                            <FontAwesomeIcon  icon={faPlayCircle}/>
                        </S.PlayButton>

                        <S.Title>
                            {
                                playlist.description.length > 55
                                ? `${playlist.description.substring(0, 55)} ...`
                                : playlist.description
                            }
                        </S.Title>
                    </S.Item>
                ))
            }
        </>
    )
}