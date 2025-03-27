import './ContactForm.scss';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
	const form = useRef();
	const [emailSent, setEmailSent] = useState(false);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.sendForm('service_2jerfrk', 'template_tdtj0wf', form.current, 'YEEOb0VOHWhUjqWIu')
			.then(
				(result) => {
					console.log(result.text);
					console.log('Message sent');

					// Clear form fields
					form.current.user_name.value = '';
					form.current.user_email.value = '';
					form.current.message.value = '';

					setEmailSent(true);
					setError(false);
					setLoading(false);
				},
				(error) => {
					console.error(error.text);
					setError(true);
					setLoading(false);
				}
			);
	};

	// Automatically hide success or error messages after 5 seconds
	useEffect(() => {
		if (emailSent || error) {
			const timer = setTimeout(() => {
				setEmailSent(false);
				setError(false);
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [emailSent, error]);

	return (
		<div className="contact-form">
			<h2 className="contact-form__title">or complete this form to reach me</h2>
			<form className="contact-form__form" ref={form} onSubmit={sendEmail}>
				<div className="contact-form__group">
					<label className="contact-form__label" htmlFor="user_name">
						Name
					</label>
					<input
						className="contact-form__input"
						type="text"
						name="user_name"
						required
						placeholder="John Doe"
						aria-label="Name"
					/>
				</div>
				<div className="contact-form__group">
					<label htmlFor="user_email" className="contact-form__label">
						Email
					</label>
					<input
						className="contact-form__input"
						type="email"
						name="user_email"
						required
						placeholder="john@doe.com"
						aria-label="Email"
					/>
				</div>
				<div className="contact-form__group">
					<label htmlFor="message" className="contact-form__label">
						Message
					</label>
					<textarea
						className="contact-form__textarea"
						name="message"
						required
						placeholder="Write your message here..."
						aria-label="Comment"></textarea>
				</div>
				<div className="contact-form__group">
					<button
						className="contact-form__submit"
						type="submit"
						disabled={loading}
						aria-label="Submit">
						{loading ? 'Sending...' : 'Submit'}
					</button>
				</div>
			</form>
			{emailSent && <div className="contact-form__validator">Email sent successfully!</div>}
			{error && (
				<div className="contact-form__error">Failed to send email. Please try again.</div>
			)}
		</div>
	);
}

export default ContactForm;
