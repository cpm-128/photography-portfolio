import React, { useState } from 'react';

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

    //sync internal state of component formState with the user input from the vdom anything there is a keystroke in name
    function handleChange(e) {
        // spreadoperator to retain the other key-value pairs in the object
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }
    console.log('>> formState >>', formState)

    // create the elements of the contact form to display on vdom
    return (
        <section>
            <h1>Contact me</h1>

            <form id='contact-form'>
                {/* name input */}
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' name='name' defaultValue={formState.name} onChange={handleChange}></input>
                </div>
                {/* email input */}
                <div>
                    <label htmlFor='email'>Email address: </label>
                    <input type='email' name='email' defaultValue={formState.email} onChange={handleChange}></input>
                </div>
                {/* message text area */}
                <div>
                    <label htmlFor='message'>Message: </label>
                    <textarea name='message' rows='5' defaultValue={formState.message} onChange={handleChange}></textarea>
                </div>
                {/* button */}
                <button type='submit'>Submit</button>
            </form>

        </section>
    )

};

export default ContactForm;