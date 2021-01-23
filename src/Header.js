import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import {Avatar} from "@material-ui/core";
import './Header.css';
import {useState} from 'react';
import { useDataLayerValue } from './DataLayer';
function Header({spotify}) {
    const [query,Setquery]=useState("");
    const [{user},dispatch]=useDataLayerValue();
    const onsubmitHandle=(e)=>{
            spotify.searchTracks(e.target.value)
            .then((data)=>{
                console.log(data.tracks.items);
                dispatch({
                    type:"SET_SEARCH",
                    search:data.tracks.items
                });
            Setquery('');
            
            })
        
            
        }
    return (
        <div className="header">
           <div className="header__left">
               <SearchIcon />
               <input placeholder="Search For Artist,Songs or podcast"  type="text" onKeyUpCapture={onsubmitHandle}/>
           </div>
           <div className="header__right">
            <Avatar src={user?.images[0]?.url} alt="paras" />
            <h4>{user?.display_name}</h4>
           </div>
        </div>
    )
}

export default Header;
