import React from 'react'
import TrackContextProvider from './TrackContext'


const GlobalContext = ({children}: React.PropsWithChildren<any>) => {

    return (
        <TrackContextProvider>
            {children}
        </TrackContextProvider>
    )
}

export default GlobalContext