import React, { MouseEventHandler, useRef, useState } from "react"
import * as S from "./styles"

interface PropsSeekBar{
    progress_ms: number,
    duration_ms: number,
    handleSeek: Function
}

export default function SeekBar({progress_ms, duration_ms, handleSeek}: PropsSeekBar){
    const [dragPointMouse, setDragPointMouse] = useState<number>(0)
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const seekBarRef = React.useRef<HTMLHeadingElement>(null)
    let progress = (progress_ms*100)/duration_ms

    function calculateMousePointerReference(posX: number){
        const rect = seekBarRef?.current?.getBoundingClientRect()
        if(rect != undefined){//typescript exigindo
            const offsetRatio = ((posX-Math.trunc(rect.x))/rect.width)*100
            if(offsetRatio >= 0 && offsetRatio <= 100)
                setDragPointMouse(offsetRatio)  
        }
    }

    function handleDrag(e: React.MouseEvent<HTMLDivElement>){
        setIsDragging(true)
        calculateMousePointerReference(e.clientX)
    }

    async function handleDragEnd(e: React.MouseEvent<HTMLDivElement>){
        calculateMousePointerReference(e.clientX)
        //converter % em ms
        const pos_ms: number = Math.trunc(Math.trunc(dragPointMouse)*duration_ms/100)
        //a api retorna a % e não o ms da música
        progress = await handleSeek(pos_ms)
        setIsDragging(false)
    }
    
    return (
        <S.Container ref={seekBarRef}>
            <S.ProgressBar width={ isDragging ? dragPointMouse : progress }/>
            <S.Slider onDrag={handleDrag} onDragEnd={handleDragEnd}/>
        </S.Container>
    )
}