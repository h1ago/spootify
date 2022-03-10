import { faVolumeDown, faVolumeOff } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useRef } from "react"
import { TokenContext } from "../../../context/TokenContext"
import { setVolume } from "../../../services/api"
import * as S from "./styles"


export default function Volume(){
    const {token} = useContext(TokenContext)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const volume = useRef<number>(0)

    async function handleMouseUp(){
        console.log('handleMouseUp')
        if(wrapperRef.current){
            wrapperRef.current.style.display = 'none'
            await setVolume(token.acessToken, volume.current*100)
        }      
    }

    function handleClick(){
        if(wrapperRef.current)
            wrapperRef.current.style.display = 'flex'
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        volume.current = Number(e.target.value)
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
                icon={volume.current > 0 ? faVolumeDown : faVolumeOff }
            />
        </S.Container>
    )
}