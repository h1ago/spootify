import React, {createContext, useState} from 'react'

interface PropsTrackContext {
    uri: string | [string],
    setUri: React.Dispatch<React.SetStateAction<string>>
}

const DEFAULT_VALUE = {
    uri: '',
    setUri: () => {}
}

const TrackContext = createContext<PropsTrackContext>(DEFAULT_VALUE)

const TrackContextProvider = ({children}: React.PropsWithChildren<React.ReactNode>) => {
    const [uri, setUri] = useState(DEFAULT_VALUE.uri)

    return (
        <TrackContext.Provider value={{uri, setUri}}>
            {children}
        </TrackContext.Provider>
    )
}

export {TrackContext}
export default TrackContextProvider