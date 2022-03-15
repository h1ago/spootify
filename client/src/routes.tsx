import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Album from './pages/Album'
import Discover from './pages/Discover'
import Favourite from './pages/Favourites'
import ListPlaylists from './pages/ListPlaylists';
import Playlist from './pages/Playlist';
import Search from './pages/Search'


export default () => (

    <Routes>
        <Route path="/" element={<Discover/>} />
            <Route path="/playlists/:id" element={<ListPlaylists/>}/>
        <Route path="/search" element={<Search/>} />
        <Route path="/favourite" element={<Favourite/>} />
        <Route path="/album/:id" element={<Album/>}/>
        <Route path="/playlist/:id" element={<Playlist/>}/>
        
    </Routes>


)
