import React, { MouseEventHandler, useContext, useEffect, useRef, useState } from "react"
import { PlaybackContext } from "../../../context/PlaybackContext"
import * as S from "./styles"
import ProgressBar from "./ProgressBar"

interface PropsSeekBar {
    handleSeek: Function
}

export default function SeekBar({handleSeek}: PropsSeekBar){
    const {playback} = useContext(PlaybackContext)
    const seekBarRef = useRef<HTMLDivElement>(null)
    const [positionDragMouse, setPositionDragMouse] = useState<number>(playback.position)
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const [isHover, setIsHover] = useState<boolean>(false)

    function calculateDragDistance(posX: number){
        const rect = seekBarRef?.current?.getBoundingClientRect()
        if(rect != undefined){
            const offsetRatio = ((posX-Math.trunc(rect.x))/rect.width)*100
            if(offsetRatio >= 0 && offsetRatio <= 100){
                setPositionDragMouse(offsetRatio)  
            }
                
        }
    }

    function handleDrag(event: React.MouseEvent<HTMLDivElement>){
        calculateDragDistance(event.clientX)
        setIsDragging(true)
    }

    async function handleDragEnd(event: React.MouseEvent<HTMLDivElement>){
        //converter % em ms
        const pos_ms: number = Math.trunc(Math.trunc(positionDragMouse)*playback.duration/100)
        await handleSeek(pos_ms, positionDragMouse)
        setIsDragging(false)
    }

    function handleMouseEnter(event: React.MouseEvent<HTMLDivElement>){
        setIsHover(true)
    }

    function handleMouseLeave(event: React.MouseEvent<HTMLDivElement>){
        setIsHover(false)
    }


    return (
        <S.Container ref={seekBarRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ProgressBar 
                durationMs={playback.duration} 
                position={playback.position} 
                positionDrag={positionDragMouse}
                isPlaying={playback.isPlaying}
                isDragging={isDragging}
                isHover={isHover} 
            />
            <S.Slider onDrag={handleDrag} onDragEnd={handleDragEnd}/>
        </S.Container>
    )
}