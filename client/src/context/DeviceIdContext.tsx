import React, {createContext, useState} from 'react'

interface PropsDeviceIdContext {
    deviceId: string,
    setDeviceId: React.Dispatch<React.SetStateAction<string>>
}

const DEFAULT_VALUE = {
    deviceId: '',
    setDeviceId: () => {}
}

const DeviceIdContext = createContext<PropsDeviceIdContext>(DEFAULT_VALUE)

const DeviceIdContextProvider = ({children}: React.PropsWithChildren<React.ReactNode>) => {
    const [deviceId, setDeviceId] = useState(DEFAULT_VALUE.deviceId)

    return (
        <DeviceIdContext.Provider value={{deviceId, setDeviceId}}>
            {children}
        </DeviceIdContext.Provider>
    )
}

export {DeviceIdContext}
export default DeviceIdContextProvider