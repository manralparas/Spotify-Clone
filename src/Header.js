import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import {Avatar} from "@material-ui/core";
import './Header.css';
import { useDataLayerValue } from './DataLayer';
function Header() {
    const [{user},dispatch]=useDataLayerValue();
    return (
        <div className="header">
           <div className="header__left">
               <SearchIcon />
               <input placeholder="Search For Artist,Songs or podcast" type="text"/>


           </div>
           <div className="header__right">
            <Avatar src={user?.images[0]?.url} alt="PM" />
            <h4>{user?.display_name}</h4>
           </div>
        </div>
    )
}

export default Header;
