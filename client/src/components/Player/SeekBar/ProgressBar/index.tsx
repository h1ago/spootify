import { useEffect, useRef, useState} from "react"
import * as S from "./styles"

interface PropsProgressBar{
    position: number,
    positionDrag: number,
    durationMs: number,
    isPlaying: boolean,
    isDragging: boolean,
    isHover: boolean
}

export default function ProgressBar({durationMs, isPlaying, position, positionDrag, isDragging, isHover}: PropsProgressBar){
    const [count, setCount] = useState<number>(position)
    const timer = useRef<any>(null)


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
    
    function msToPercent(ms: number): number{
        //se o número já tiver em porcentagem não precisa converter
        if(ms/100 <= 1)
            return ms
        return ms*100/durationMs
    }

    
    return (
        <S.Container width={isDragging ? positionDrag : msToPercent(count)} isHover={isHover}/>
    )
}