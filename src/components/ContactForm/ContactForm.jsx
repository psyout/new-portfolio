import React from 'react';
import './ContactForm.scss';

function ContactForm() {
	return (
		<div className='contact-form'>
			<h2 className='contact-form__title'>or complete this form to reach me</h2>
			<form className='contact-form__form'>
				<div className='contact-form__group'>
					<input className='contact-form__input' type='text' id='name' name='name' required placeholder='Name' />
				</div>
				<div className='contact-form__group'>
					<input className='contact-form__input' type='email' id='email' name='email' required placeholder='Email' />
				</div>
				<div className='contact-form__group'>
					<textarea className='contact-form__textarea' id='comment' name='comment' required placeholder='Comment'></textarea>
				</div>
				<div className='contact-form__group'>
					<button className='contact-form__submit' type='submit'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
