import axios from "axios";
import { setAlert } from "./setAlert";

export const sendEmail = (formData) => async dispatch => {
    try {
        console.log(formData);
        const config = {
            headers: {
            "Content-Type": "application/json"
            }
        };
        const res = await axios.post('https://personal-webpage-back-end.herokuapp.com/api/email', formData, config)

        console.log(res);
        // if (res.status !== 200) {
        //     if (errors) {
        //         errors.forEach((error) => dispatch(setAlert(error.msg, 7500)));
        //     }
        // }

        dispatch(setAlert('Email Sent Successfully', 7500));
        
    } catch (err) {
        const errors = err.response.data.errors;

        console.log(errors);
        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 7500)));
        }
    }
}