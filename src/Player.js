import React from 'react';
import './player.css';
import Body from './body'
import Sidebar from './Sidebar';
import Footer from './Footer';
import {useDataLayerValue} from './DataLayer';
import BodySearch from './bodysearch';
function Player({spotify}) {
    const [{search}] = useDataLayerValue();
    console.table(search);
    return (
        <div className="player">
        <div className="player_body">
            <Sidebar spotify={spotify} />
           {search?(<BodySearch spotify={spotify}/> ): <Body spotify={spotify}/>}
        </div>
        <Footer spotify={spotify}/>
        </div>
    )
}

export default Player
