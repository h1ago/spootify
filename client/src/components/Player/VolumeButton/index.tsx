import { faVolumeUp, faVolumeDown, faVolumeMute } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef, useState } from "react"
import { changeVolume } from "../../../services/api"
import * as S from "./styles"

interface PropsVolumeButton {
    token: string
}

export default function VolumeButon({token}: PropsVolumeButton){
    const wrapperRef = useRef<HTMLDivElement>(null)
    const [volume, setVolume] = useState<number>(50)

    async function handleMouseUp(){
        if(wrapperRef.current){
            wrapperRef.current.style.display = 'none'
            await changeVolume(token, volume*100)
        }      
    }

    function handleClick(){
        if(wrapperRef.current)
            wrapperRef.current.style.display = 'flex'
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setVolume(Number(e.target.value))
    }
    
    function handleMouseLeave(){
        if(wrapperRef.current)
            wrapperRef.current.style.display = 'none'
    }

    return (
        <S.Container>
            <S.Wrapper ref={wrapperRef} onMouseLeave={handleMouseLeave}>
                <S.ProgressBar min="0" max="1" step="0.01" onChange={handleChange} onMouseUp={handleMouseUp} type="range"/>
            </S.Wrapper>
            <FontAwesomeIcon 
                onClick={handleClick} 
                icon={volume > 0.8 ? faVolumeUp : (volume > 0 ? faVolumeDown : faVolumeMute) }
                color="#39383D"
            />
        </S.Container>
    )
}