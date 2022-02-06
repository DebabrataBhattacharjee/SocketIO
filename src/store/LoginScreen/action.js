import {
    SAVE_USER,
    GET_USER,
    REMOVE_USER,
} from './constants';

export function saveUser(payload) {
    return {
        type: SAVE_USER,
        payload,
    }
}

export function getUser() {
    return {
        type: GET_USER,
    }
}

export function removeUser() {
    return {
        type: REMOVE_USER,
    }
}