import {SET_PLAYLIST, SORT_PLAYLIST_ALL, SORT_PLAYLIST_OWNED} from '../actions/playlistActions';



const playlistReducer = (state = {value: [], old: []}, action) => {
    switch (action.type) {
        case SET_PLAYLIST:
            return {...state, value: action.playlist, old: action.playlist};
        case SORT_PLAYLIST_OWNED:
            const filterPlaylist = (playlist)=>{ return playlist.owner.display_name === "Dilshan Karunanayaka"};
            return {...state, old: state.old.length === 0 ? state.value: state.old,  value: state.value.filter(filterPlaylist)};
        case SORT_PLAYLIST_ALL:     
            return {...state, value: state.old};
        default:
            return {...state};
    }
};
export default playlistReducer;