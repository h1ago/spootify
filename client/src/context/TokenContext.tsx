import React, {createContext, useState} from 'react'

export type Token = {
    acessToken: string,
    refreshToken?: string,
    expiresIn: number
}

interface PropsTokenContext {
    token: Token,
    setToken: React.Dispatch<React.SetStateAction<Token>>
}

const DEFAULT_VALUE = {
    token: {
        acessToken: '',
        expiresIn: 0
    },
    setToken: () => {}
}

const TokenContext = createContext<PropsTokenContext>(DEFAULT_VALUE)

const TokenContextProvider = ({children}: React.PropsWithChildren<React.ReactNode>) => {
    const [token, setToken] = useState(DEFAULT_VALUE.token)

    return (
        <TokenContext.Provider value={{token, setToken}}>
            {children}
        </TokenContext.Provider>
    )
}

export {TokenContext}
export default TokenContextProvider