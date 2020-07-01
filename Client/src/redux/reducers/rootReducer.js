import playlistReducer from './playlistReducer';
import userDataReducer from '../reducers/userDataReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    playlist: playlistReducer,
    userData: userDataReducer
});

export default rootReducer;