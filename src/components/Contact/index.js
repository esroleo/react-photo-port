import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';



function ContactForm() {

    // hook that will manage the form data as a controlled compoennt
    //const [formState, setFormState] = useState();
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    // hook to validate error message of the form
    const [errorMessage, setErrorMessage] = useState('');
    
    // deconstruct formState
    const { name, email, message } = formState;



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
          setFormState({ [e.target.name]: e.target.value });
          console.log('Form', formState);
        }
      };

      
    // JSX
    // handle each target name = in one liner
    // before setFormState({...formState, name: e.target.value })
    // after setFormState({...formState, [e.target.name]: e.target.value })
    const handleChange = (e) => {
        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
        //console.log('errorMessage', errorMessage); 
        // if form data has passed then assigned correct form state
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
    };
      
      //console.log(formState);




    return (
        <section>

            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                    <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
      )


}
    


export default ContactForm;