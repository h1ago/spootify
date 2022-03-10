import React, {createContext, useState} from 'react'

export type Track = {
    name: string,
    album: Spotify.Album,
    uri: string,
    id: string | null,
    artists: Spotify.Artist[]
}

export type Playback = {
    isPaused: boolean,
    isPlaying: boolean,
    position: number,
    duration: number,
    repeat: number,
    shuffle: boolean,
    volume?: number,
    isDragging?: boolean,
    currentTrack?: Track
}

interface PropsPlaybackContext {
    playback: Playback,
    setPlayback: React.Dispatch<React.SetStateAction<Playback>>
}


export const DEFAULT_VALUE: PropsPlaybackContext = {
    playback:{
        isPaused: true,
        isPlaying: false,
        position: 0,
        repeat: 0,
        shuffle: false,
        isDragging: false,
        duration: 1,
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