import React, {useState, Fragment} from 'react';
import { sendEmail } from '../../actions/email';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Contact = ({sendEmail}) => {
    const [formData, setFormData] = useState({
        emailFrom: '',
        subject: '',
        text: ''
    });



    const {
        emailFrom,
        subject,
        text
    } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        console.log('sending email');
        sendEmail(formData);
    }

    return (
        <div className='email-container'>
            <form className='email-form' onSubmit={e => onSubmit(e)}>
                <div className='email-form-group'>
                    <label htmlFor='emailFrom'>Your Email</label>
                    <input type='text' placeholder='example@gmail.com' value={emailFrom} name='emailFrom' onChange={(e) => onChange(e)}></input>
                </div>
                <div className='email-form-group'>
                    <label htmlFor='subject'>Subject</label>
                    <input type='text' placeholder='Inquiry' name='subject' value={subject} onChange={(e) => onChange(e)}></input>
                </div>
                <div className='email-form-group'>
                    <label htmlFor='text'>Text</label>
                    <input type='text' name='text' value={text} onChange={(e) => onChange(e)}></input>
                </div>
                <button type='submit'>Submit Email</button>
            </form>
        </div>
    )
}

Contact.propTypes = {
    sendEmail: PropTypes.func.isRequired,
}

export default connect(null, {sendEmail})(Contact)
