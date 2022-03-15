import { useContext } from "react"
import * as S from'./styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { startPlayback } from "../../../../services/api";
import { TokenContext } from "../../../../context/TokenContext";
import { DeviceIdContext } from "../../../../context/DeviceIdContext";

interface PropsReleases {
    albums: any
}

export default function BlockBody({albums}: PropsReleases){
    const {token} = useContext(TokenContext)
    const {deviceId} = useContext(DeviceIdContext)

    return (
        <>
            {
                albums.map((album: any, index: number) => (
                    
                    <S.Item 
                        key={index}
                        to={`/album/${album.id}`}
                    >
                        <S.Image src={album.images[1].url} />

                        <S.PlayButton 
                            onClick={ async (e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                await startPlayback(token.acessToken, deviceId, undefined, album.uri)
                            }}
                        >
                            <FontAwesomeIcon  icon={faPlayCircle}/>
                        </S.PlayButton>

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