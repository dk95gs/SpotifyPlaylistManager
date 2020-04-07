import playlistReducer from './playlistReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    playlist: playlistReducer
});

export default rootReducer;