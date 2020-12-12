
import './App.css';
import Login from './HomeComponent';
import React,{ useEffect,useState} from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import {useDataLayerValue} from './DataLayer'

const spotify= new SpotifyWebApi();


function App() {

  
  
  const [{user,token},dispatch]=useDataLayerValue();
  useEffect(()=>{

    const hash=getTokenFromUrl();
    const _token=hash.access_token;
    window.location.hash="";
    if(_token)
    {
      
      dispatch({
        type: 'SET_TOKEN',
        token:_token
      });



      spotify.setAccessToken(_token);

      spotify.getMe().then(user=>{
        dispatch({
          type: 'SET_USER',
          user: user
        })
        
      });
      spotify.getUserPlaylists().then(
        (playlists)=>dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        })
      )
      spotify.getPlaylist('37i9dQZEVXcEH5Jko2YWUI').then(playlist=>dispatch({
        type:"SET_DISCOVER",
        discover_weekly:playlist,
      }))
    }

  },[])
  console.log(user);
  return (
  <div className="App">
    {
      token ?(<Player spotify={spotify} />):(<Login />)
    }
  </div>
  );
}

export default App;

  
  
  