import {
    SAVE_USER,
    GET_USER,
    REMOVE_USER,
} from './constants';

const initialState = {
    userName: '',
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_USER:
            console.log('ACTIOn', action.payload);
            return {
                ...state,
                userName: action.payload,
            }

        case GET_USER:
            return {
                ...state,
            }

        case REMOVE_USER:
            return {
                ...state,
                userName: null,
            }

        default: {
            return state;
        }
    }
}