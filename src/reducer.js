export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    token:null,
    discover_weekly:null,
    search:null,
    home:false

};
const reducer=(state,action)=>{

//    console.log(action);
    switch(action.type)
    {
        case 'SET_USER':
            return {
                    ...state,user:action.user
                   };
        case 'SET_TOKEN':
            return {
                ...state,token:action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,playlists: action.playlists,
            }
        case 'SET_DISCOVER':
            return {
                ...state,discover_weekly:action.discover_weekly
            }
        case "SET_PLAYING":
            return {
                     ...state,
                     playing: action.playing,
            };
        case "SET_ITEM":
            return {
                 ...state,
                  item: action.item,
            }; 
        case "SET_SEARCH":
            return {
                ...state,
                search:action.search
            };
        case "SET_HOME":
            return {
                ...state,
                home:action.home
            };
        default :
        return state;

    }

}
export default reducer;