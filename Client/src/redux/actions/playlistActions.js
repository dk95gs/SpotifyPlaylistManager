export const SET_PLAYLIST = "SET_PLAYLIST";
export const SORT_PLAYLIST_OWNED = "SORT_PLAYLIST_OWNED";
export const SORT_PLAYLIST_ALL = "SORT_PLAYLIST_ALL";

export const setPlaylist = () => ({
    type: SET_PLAYLIST
});
export const sortPlaylistOwned = () => ({
    type: SORT_PLAYLIST_OWNED
});
export const sortPlaylistAll = () => ({
    type: SORT_PLAYLIST_ALL
});