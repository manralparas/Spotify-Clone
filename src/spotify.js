export const authEndpoint="http://accounts.spotify.com/authorize";
const redirectUri="http://spotify-react-project-00.herokuapp.com";
const clientId="00e9db42e4d74b40bc28dd29b3e499dd";
const scope=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",

];
export const uri=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`
export const getTokenFromUrl=()=>{
      const url = window.location.hash;
      const access_token = url.split('&')
      .filter((x)=>{
          if(x.match('access_token')!=='null')
          return true;
        })[0]
      .split('=')[1];
      return access_token;

}