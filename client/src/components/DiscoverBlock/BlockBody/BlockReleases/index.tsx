import React, { useContext } from "react"
import * as S from'./styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { TrackContext } from "../../../../context/TrackContext";

interface PropsReleases {
    albums: any
}

export default function BlockBody({albums}: PropsReleases){

    const {setUri} = useContext(TrackContext)

    return (
        <>
            {
                albums.map((album: any, index: number) => (
                    <S.Item 
                        key={index}
                        onClick={ () => setUri(album.uri) }
                    >
                        <S.Image src={album.images[1].url} />
                        <S.PlayButton><FontAwesomeIcon  icon={faPlayCircle}/></S.PlayButton>
                        <S.Title>
                            {
                                album.name.length > 55
                                ? `${album.name.substring(0, 55)} ...`
                                : album.name
                            }
                        </S.Title>
                        <S.Artist>
                            {
                                album.artists.map( (artist: any, index: number) => {
                                    return index > 0 
                                        ? `, ${artist.name}`
                                        : artist.name
                                })
                            }
                        </S.Artist>
                    </S.Item>
                ))
            }
        </>
    )
}