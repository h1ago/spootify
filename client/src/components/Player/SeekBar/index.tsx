import React, { useEffect, useRef, useState } from "react"
import * as S from "./styles"
import { seekToPosition } from "../../../services/api"

interface PropsSeekBar {
    token: string,
    position: number,
    duration: number,
    isPlaying: boolean
}

export default function SeekBar({token, position, duration, isPlaying}: PropsSeekBar){
    const [count, setCount] = useState<number>(position)
    const timer = useRef<any>(null)
    const positionCurrent = useRef<number>(0)

    useEffect(()=>{
        if(!timer.current && isPlaying){
            setCount(position)
            timer.current = setInterval( () => {
                setCount(state => (state + 1000))
            }, 1000)
        }
        return () => {
            clearInterval(timer.current)
            timer.current = null
            
        }

    },[position])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        positionCurrent.current = Math.round(Number(e.target.value)*duration/100)
        setCount(positionCurrent.current)
    }

    async function handleMouseUp(e: React.MouseEvent<HTMLInputElement>){
        await seekToPosition(token, positionCurrent.current)
    }

    return (
        <S.Container>
            <S.ProgressBar 
                min="0" max="100" step="0.1" type="range"
                onChange={handleChange}
                onMouseUp={handleMouseUp}
                value={count*100/duration}
                progress={count*100/duration}
            />
        </S.Container>
    )
}