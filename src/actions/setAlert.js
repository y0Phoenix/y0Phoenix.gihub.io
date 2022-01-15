import {v4 as uuid} from 'uuid';

export const setAlert = (msg, time = 5000) => (dispatch) => {
    const id = uuid();
    console.log(`${time} ${id}`);
    dispatch({
        type: 'SET_ALERT',
        payload: {msg, id}
    });

    setTimeout(() => dispatch({type: 'REMOVE_ALERT', payload: id}), time);
}