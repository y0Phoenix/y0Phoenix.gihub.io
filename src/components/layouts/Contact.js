import React, {useState, useRef} from 'react';
import { sendEmail } from '../../actions/email';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Contact = ({sendEmail}) => {
    const from = useRef();
    const sub = useRef();
    const tex = useRef();

    const initialState = {
        emailFrom: '',
        subject: '',
        text: ''
    }

    const [formData, setFormData] = useState(initialState);



    const {
        emailFrom,
        subject,
        text
    } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const resetForms = () => {
        setFormData(initialState);
        from.current.value = '';
        sub.current.value = '';
        tex.current.value = '';
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log('sending email');
        sendEmail(formData, resetForms);
    }

    return (
        <div className='email-container'>
            <form className='email-form' onSubmit={e => onSubmit(e)}>
                <div>
                    <small>To</small><br></br>
                    <input type='text' placeholder='aarongraybill3@gmail.com' disabled></input>
                </div>
                <div className='email-form-1'>
                    <small>Your Email</small><br></br>
                    <input type='text' placeholder='example@gmail.com' value={emailFrom} name='emailFrom' ref={from} onChange={(e) => onChange(e)}></input>
                </div>
                <div className='email-form-2'>
                    <div>
                        <small>Subject</small><br></br>
                        <input type='text' placeholder='Inquiry' name='subject' value={subject} ref={sub} onChange={(e) => onChange(e)}></input>
                    </div>
                </div>
                <div className='email-form-3'>
                    <small>Text</small><br></br>
                    <textarea type='text' name='text' value={text} ref={tex} onChange={(e) => onChange(e)}></textarea>
                </div>
                <div>
                    <br></br>
                    <button type='submit' className='email-form-submit'>Submit Email</button>
                    <br></br>
                    <br></br>
                </div>
            </form>
        </div>
    )
}

Contact.propTypes = {
    sendEmail: PropTypes.func.isRequired,
}

export default connect(null, {sendEmail})(Contact)
