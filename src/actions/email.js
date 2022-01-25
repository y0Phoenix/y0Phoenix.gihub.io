import axios from "axios";
import { setAlert } from "./setAlert";

export const sendEmail = (formData, resetForms) => async dispatch => {
    try {
        const config = {
            headers: {
            "Content-Type": "application/json"
            }
        };
        dispatch({
            type: 'LOADING'
        });
        
        await axios.post('https://personal-webpage-back-end.herokuapp.com/api/email', formData, config)
        
        dispatch({
            type: 'STOP_LOADING'
        });

        dispatch(setAlert('Email Sent Successfully', 'alert-success', 7500));
        resetForms();
        
    } catch (err) {
        dispatch({
            type: 'STOP_LOADING'
        });
        const errors = err.response.data.errors;

        console.log(errors);
        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'alert-danger', 7500)));
        }
    }
}