import {SET_USERID} from '../actions/userDataActions';

const userDataReducer = (state = {value:[]}, action) => {
    switch (action.type) {
        case SET_USERID:
            return {...state, value: action.userId}
        default:
            return {...state};
    }
}

export default userDataReducer;