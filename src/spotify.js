export const authEndpoint="http://accounts.spotify.com/authorize";
const redirectUri="http://localhost:3000";
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
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        let parts =item.split('=');
        initial[parts[0]]=decodeURIComponent(parts[1]);
        return initial;
    },{}
    );
}