import React, {createContext, useState} from 'react'

type Track = {
    name: string,
    album: Spotify.Album,
    artists: Spotify.Artist[]
}

export type Playback = {
    is_active?: boolean,
    paused?: boolean,
    position: number,
    shuffle?: boolean,
    loading?: boolean,
    duration: number,
    current_track?: Track
}

interface PropsPlaybackContext {
    playback: Playback,
    setPlayback: React.Dispatch<React.SetStateAction<Playback>>
}


const DEFAULT_VALUE: PropsPlaybackContext = {
    playback:{
        position: 0,
        duration: 1
    },
    setPlayback: () => {}
}

const PlaybackContext = createContext<PropsPlaybackContext>(DEFAULT_VALUE)

const PlaybackContextProvider = ({children}: React.PropsWithChildren<React.ReactNode>) => {
    const [playback, setPlayback] = useState(DEFAULT_VALUE.playback)

    return (
        <PlaybackContext.Provider value={{playback, setPlayback}}>
            {children}
        </PlaybackContext.Provider>
    )
}

export {PlaybackContext}
export default PlaybackContextProvider