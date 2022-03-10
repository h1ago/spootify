import React, {createContext, useState} from 'react'
import { Track } from './PlaybackContext'

interface PropsTrackContext {
    track: any,
    setTrack: React.Dispatch<React.SetStateAction<any>>
}

const DEFAULT_VALUE = {
    track: '',
    setTrack: () => {}
}

const TrackContext = createContext<PropsTrackContext>(DEFAULT_VALUE)

const TrackContextProvider = ({children}: React.PropsWithChildren<React.ReactNode>) => {
    const [track, setTrack] = useState(DEFAULT_VALUE.track)

    return (
        <TrackContext.Provider value={{track, setTrack}}>
            {children}
        </TrackContext.Provider>
    )
}

export {TrackContext}
export default TrackContextProvider