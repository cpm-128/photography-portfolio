import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    // hook to manage the data and sync the form data with the component's state
    const [formState, setFormState] = useState(
        // clear input field on the component loading
        {
            name: '',
            email: '',
            message: ''
        }
    );

    // hook to define error messages
    const [errorMessage, setErrorMessage] = useState('');

    //sync internal state of component formState with the user input from the vdom anything there is a keystroke in name
    function handleChange(e) {
        // validate email before syncing
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log('>> email isValid >>', isValid);
            if (!isValid) {
                setErrorMessage('Invalid email address.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`{e.target.name} is required.`);
                } else {
                setErrorMessage('');
                }
            }
        }
        // spreadoperator to retain the other key-value pairs in the object only IF validation success
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }
    //console.log('>> formState >>', formState)
    //console.log('>> errorMessage if exists >>', errorMessage)

    // submit the form data
    function handleSubmit(e) {
        e.preventDefault();
        //console.log('>> formState in handleSubmit >>', formState)
        //alert('Message sent.')
        // TODO: project scope is only for frontend. Backend developer needed for additional functionality.
    }

    // create the elements of the contact form to display on vdom
    return (
        <section>
            <h1 data-testid="h1tag">Contact me</h1>

            <form id='contact-form' onSubmit={handleSubmit}>
                {/* name input */}
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' name='name' defaultValue={formState.name} onBlur={handleChange}></input>
                </div>
                {/* email input */}
                <div>
                    <label htmlFor='email'>Email address: </label>
                    <input type='email' name='email' defaultValue={formState.email} onBlur={handleChange}></input>
                </div>
                {/* message text area */}
                <div>
                    <label htmlFor='message'>Message: </label>
                    <textarea name='message' rows='5' defaultValue={formState.message} onBlur={handleChange}></textarea>
                </div>
                {/* error message only IF validation fails */}
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                {/* button */}
                <button type='submit' data-testid="submitBtn">Submit</button>
            </form>

        </section>
    )

};

export default ContactForm;