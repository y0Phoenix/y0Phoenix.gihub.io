export const loading = (bool) => (dispatch) => {
    if (bool) {
        dispatch({
            type: 'LOADING'
        });
    }
    else {
        dispatch({
            type: 'STOP_LOADING'
        });
    }
}