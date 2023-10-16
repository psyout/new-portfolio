import './ContactForm.scss';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
	const form = useRef();
	const [emailSent, setEmailSent] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_2jerfrk', 'template_tdtj0wf', form.current, 'YEEOb0VOHWhUjqWIu').then(
			(result) => {
				console.log(result.text);
				console.log('message sent');

				form.current.user_name.value = '';
				form.current.user_email.value = '';
				form.current.message.value = '';

				setEmailSent(true);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};
	return (
		<div className='contact-form'>
			<h2 className='contact-form__title'>or complete this form to reach me</h2>
			<form className='contact-form__form' ref={form} onSubmit={sendEmail}>
				<div className='contact-form__group'>
					<input className='contact-form__input' type='text' name='user_name' required placeholder='Name' />
				</div>
				<div className='contact-form__group'>
					<input className='contact-form__input' type='email' name='user_email' required placeholder='Email' />
				</div>
				<div className='contact-form__group'>
					<textarea className='contact-form__textarea' name='message' required placeholder='Comment'></textarea>
				</div>
				<div className='contact-form__group'>
					<button className='contact-form__submit' type='submit' value='Send'>
						Submit
					</button>
					{/* <ButtonMain url={`https://wulen.netlify.app`} title={`Submit`} type='submit' value='Send' /> */}
				</div>
			</form>
			{emailSent && <div className='contact-form__validator'>Email sent successfully!</div>}
		</div>
	);
}

export default ContactForm;
