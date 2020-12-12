import React from 'react';
import './player.css';
import Body from './body'
import Sidebar from './Sidebar';
import Footer from './Footer';
function Player({spotify}) {
    return (
        <div className="player">
        <div className="player_body">
            <Sidebar />
            <Body spotify={spotify}/>
        </div>
        <Footer spotify={spotify}/>
        </div>
    )
}

export default Player
