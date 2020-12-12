import React from 'react'
import './body.css'
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SongRow from './SongRow';
function Body({spotify}) {
    const [{discover_weekly},dispatch]=useDataLayerValue();
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
            <div className="body__info" >
                <img src={discover_weekly?.images[0]?.url} alt=""/>
                <div className="body__infoText">
                    <strong>Playlists</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>

                </div>
            </div>
        <div className="body__song" >
            <div className="body__icon">
                <PlayCircleFilledIcon className="body__shuffle" onClick={playPlaylist}/>

                <FavoriteIcon fontSize="large" />
                <MoreHorizIcon />
            </div>
            {discover_weekly?.tracks.items.map(item=>
                <SongRow track={item.track} playSong={playSong} />)}
        </div>
        </div>

    )
}

export default Body;
