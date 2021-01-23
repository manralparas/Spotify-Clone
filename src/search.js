import React from 'react';
import './player.css';
import Sidebar from './Sidebar';
import Footer from './Footer';
import BodySearch from './bodysearch';
function Search({spotify}) {
    console.log("search called");
    return (
        <div className="player">
        <div className="player_body">
            <Sidebar />
            <BodySearch spotify={spotify}/>
        </div>
        <Footer spotify={spotify}/>
        </div>
    )
}

export default Search;
