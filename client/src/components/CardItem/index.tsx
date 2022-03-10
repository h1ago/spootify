import React, { useContext } from "react"
import * as S from'./styles'
import { startPlayback } from "../../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

interface PropsCardItem {
    acessToken: string,
    deviceId: string,
    path: string,
    contextUri: string | undefined,
    image: string,
    uri: string | undefined,
    type: string,
    title: string,
    artists?: [any]


}

export default function CardItem(props: PropsCardItem){

    return (
        <>
            <S.Item to={props.path}>
                <S.Image src={props.image} />

                <S.PlayButton 
                    onClick={ async (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            await startPlayback(props.acessToken, props.deviceId, props.uri, props.contextUri)
                    }}
                >
                    <FontAwesomeIcon  icon={faPlayCircle}/>
                </S.PlayButton>

                <S.Title>
                    {
                        props.title.length > 55
                        ? `${props.title.substring(0, 55)} ...`
                        : props.title
                    }
                </S.Title>
                {
                    props.type == 'album' &&
                    <S.Artist>
                            {
                                props.artists?.map( (artist: any, index: number) => (
                                    index > 0 
                                        ? `, ${artist.name}`
                                        : artist.name
                                ))
                            }
                    </S.Artist>
                }
            </S.Item>
        </>
    )
}