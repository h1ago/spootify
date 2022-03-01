import React from 'react'
import PlaybackContextProvider from './PlaybackContext'
import TrackContextProvider from './TrackContext'


const GlobalContext = ({children}: React.PropsWithChildren<any>) => {

    return (
        
        <TrackContextProvider>
            <PlaybackContextProvider>
                {children}
            </PlaybackContextProvider>
        </TrackContextProvider>
    )
}

export default GlobalContext