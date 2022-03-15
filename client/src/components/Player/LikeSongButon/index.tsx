import { isSavedTrack, removeTrack, saveTrack } from "../../../services/api";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface PropsLikeSongButton {
    token: string,
    id: any
}

export default function LikeSongButton({token, id}: PropsLikeSongButton){
    const [isLiked, setIsLiked] = useState<boolean>(false)
    
    useEffect( () => {
        (async () => {
            const isSaved = await isSavedTrack(token, id)
            setIsLiked(isSaved[0])
        })()
    }, [id] )

    async function handleClick(){

        if(isLiked){
            await removeTrack(token, id)
            setIsLiked(false)
        } else {
            await saveTrack(token, id)
            setIsLiked(true)
        }
    }

    return (
        <FontAwesomeIcon 
            onClick={handleClick}
            icon={faHeart}
            color={isLiked ? '#ff7b00' : '#39383D'}
        />
    )
}