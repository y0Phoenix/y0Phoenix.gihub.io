import {v4 as uuid} from 'uuid';

export const setAlert = (msg, type, time = 5000) => (dispatch) => {
    const id = uuid();
    dispatch({
        type: 'SET_ALERT',
        payload: {msg, id, type}
    });

    setTimeout(() => dispatch({type: 'REMOVE_ALERT', payload: id}), time);
}