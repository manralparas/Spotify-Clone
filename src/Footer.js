import React ,{useEffect,useState} from 'react'
import './footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import {Grid,Slider } from "@material-ui/core"
import { useDataLayerValue } from './DataLayer';
export default function Footer({spotify}) {
     const [{token,item,playing},dispatch] = useDataLayerValue();
     useEffect(()=>{
         spotify.getMyCurrentPlaybackState().then((playing)=>{
             dispatch({
                 type:'SET_PLAYING',
                 playing:playing.is_playing
             });
             dispatch({
                 type:'SET_ITEM',
                 item:playing.item
             });

         });
     },[spotify]);
     const handlePlayPause=()=>{
         if(playing){
             spotify.pause();
             dispatch({
                 type:"SET_PLAYING",
                 playing:false
             });
         }
         else{
             spotify.play();
             dispatch({
                 type:"SET_PLAYING",
                 playing:false,
             });
         }
        }
         const skipNext=()=>{
                spotify.skipToNext();
                spotify.getMyCurrentPlayingTrack().then((r)=>{
                    dispatch({
                        type:"SET_ITEM",
                        item:r.item,

                    });
                });
                dispatch({
                    type:"SET_PLAYING",
                    playing : true,
                
                });
        }
        const skipPrevious=()=>{
            spotify.skipToPrevious();
            spotify.getMyCurrentPlayingTrack().then((r)=>{
                dispatch({
                    type:"SET_ITEM",
                    item:r.item,
                });
                dispatch(
                    {
                        type:"SET_PLAYING",
                        playing:true
                    }
                );
            })
        }
     


    return (
        <div className="footer">
        <div className="footer__left">
            <img src={item?.album.images[0].url}
                 alt={item?.name} className="footer__albumLogo" />
        {item ? (
          <div className="song__info">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="song_info">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
        </div>
        <div className="footer__center">
           <ShuffleIcon className="footer__green" />
           <SkipPreviousIcon className="footer__icon" onClick={skipNext} />
         {
            playing?(
           <PauseCircleOutlineIcon fontSize="large" onClick={handlePlayPause} className="footer__icon"/>)
          :( <PlayCircleOutlineIcon fontSize="large" onClick={handlePlayPause} className="footer__icon"/>)

         } 
           <SkipNextIcon className="footer__icon" onClick={skipPrevious} />
           <RepeatIcon className="footer__green" />
        </div>
        <div className="footer__right">
        <Grid container spacingc={2}>
            <Grid item>
                <PlaylistPlayIcon />
            </Grid>
            <Grid item>
                <VolumeDownIcon/>
            </Grid>
            <Grid item xs>
                <Slider />
            </Grid>
        </Grid>

        </div>
        
        </div>
    )
}
