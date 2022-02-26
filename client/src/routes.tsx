import React from 'react'
import Discover from './pages/Discover'
import Favourite from './pages/Favourites'
import Playlists from './pages/Playlists'
import Search from './pages/Search'
import Loading from "./components/Loading"

interface PropsRoutes {
    path: String,
    token: String
};

export default function Routes(props: PropsRoutes) {

    if(!props.token) return <Loading/>

    switch (props.path) {
        case '/discover':
            return <Discover token={props.token}/>
        case '/favourites':
            return <Favourite/>
        case '/playlists':
            return <Playlists/>
        case '/search':
            return <Search/>
        default:
            return <></>
    }

}