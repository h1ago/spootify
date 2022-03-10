import React from 'react'
import DeviceIdContextProvider from './DeviceIdContext'
import PlaybackContextProvider from './PlaybackContext'
import TokenContextProvider from './TokenContext'
import TrackContextProvider from './TrackContext'


const GlobalContext = ({children}: React.PropsWithChildren<any>) => {

    return (
        <TokenContextProvider>
            <DeviceIdContextProvider>
                <TrackContextProvider>
                    <PlaybackContextProvider>
                        {children}
                    </PlaybackContextProvider>
                </TrackContextProvider>
            </DeviceIdContextProvider>
        </TokenContextProvider>
    )
}

export default GlobalContext