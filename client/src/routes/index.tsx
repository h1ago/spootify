import React from 'react'
import Discover from './Discover'
import Favourite from './Favourites'
import Playlists from './Playlists'
import Search from './Search'

interface Path {
    path: String
};

export default function Routes({path}: Path) {

    switch (path) {
        case '/discover':
            return <Discover/>
        case '/favourites':
            return <Favourite/>
        case '/playlists':
            return <Playlists/>
        case '/search':
            return <Search/>
        default:
            return <Discover/>
    }

}
