import React, { useContext } from "react"
import * as S from'./styles'
import { TrackContext } from "../../../../context/TrackContext";

interface PropsFeatured {
    playlists: any
}

export default function BlockBody({playlists}: PropsFeatured){

    const {setUri} = useContext(TrackContext)

    return (
        <>
            {
                playlists.map( (playlist: any, index: number) => (

                    <S.Item key={index}>
                        <S.Image src={playlist.images[0].url} />
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