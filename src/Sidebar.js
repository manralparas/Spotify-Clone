import React from 'react';
import './sidebar.css'
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';
import {useDataLayerValue} from './DataLayer';

export default function Sidebar() {
const [{user,playlists},dispatch]= useDataLayerValue();

    return (
        <div className="sidebar">
        <img  className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt='spotifyLogo' />
        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={LibraryMusicIcon} title="Search" />
        <SidebarOption Icon={SearchIcon} title="Your Library" />

        <br />
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr />
       {playlists?.items?.map(playlist=>(

        <SidebarOption title={playlist.name}/>
           
       ))} 
        </div>

    )
}
