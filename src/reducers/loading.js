/* eslint-disable import/no-anonymous-default-export */
const initialState = {loading: true};

export default function(state = initialState, action) {
    const {type} = action;
    switch (type) {
        case 'LOADING':
            state = {...state, loading: true}
            return state;
        case 'STOP_LOADING':
            state = {...state, loading: false}
            return state;
        default:
            return state;
    }
}