import { Route, Routes } from "react-router-dom"

import Discover from "./pages/Discover"
import Search from "./pages/Search"
import Favourites from "./pages/Favourites"
import Playlists from "./pages/Playlists"

export default () => (
    <Routes>
        <Route path="/" element={<Discover/>} />
        <Route path="/dicover" element={<Discover/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/favourites" element={<Favourites/>} />
        <Route path="/playlists" element={<Playlists/>} />
    </Routes>
)

