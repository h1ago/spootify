import React from 'react'
import DeviceIdContextProvider from './DeviceIdContext'
import PlaybackContextProvider from './PlaybackContext'
import TokenContextProvider from './TokenContext'


const GlobalContext = ({children}: React.PropsWithChildren<any>) => {

    return (
        <TokenContextProvider>
            <DeviceIdContextProvider>
                <PlaybackContextProvider>
                    {children}
                </PlaybackContextProvider>
            </DeviceIdContextProvider>
        </TokenContextProvider>
    )
}

export default GlobalContext