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
      <div onClick={()=>{dispatch({
           type:"SET_SEARCH",
           search:[]
       })

      }}> <SidebarOption Icon={SearchIcon} title="Search" /> </div> 
       
       <div onClick={()=>{dispatch({
           type:"SET_SEARCH",
           search:null
       })}}><SidebarOption Icon={LibraryMusicIcon} title="Your Library"  /></div> 

        <br />
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr />
       {playlists?.items?.map(playlist=>(

        <SidebarOption title={playlist.name}/>
           
       ))} 
        </div>

    )
}
