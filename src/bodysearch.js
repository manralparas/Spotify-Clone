import React from 'react'
import './body.css'
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SongRow from './SongRow';
function BodySearch({spotify}) {
    const [{search},dispatch]=useDataLayerValue();
     const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcEH5Jko2YWUI`,
      })
      .then((r) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    console.log(`currenly playing ${id}`)
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
    return (

        <div className="body">
            <Header spotify={spotify}/>
            <div className="body__song" >
            <div className="body__icon">
                <PlayCircleFilledIcon className="body__shuffle" onClick={playPlaylist}/>

                <FavoriteIcon fontSize="large" />
                <MoreHorizIcon />
            </div>
            {search?.map(item=>
                <SongRow track={item} playSong={playSong} />)}
        </div>
        </div>

    )
}

export default BodySearch;
