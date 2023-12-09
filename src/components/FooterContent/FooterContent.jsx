import './FooterContent.scss';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ContactForm from '../ContactForm/ContactForm';

function FooterContent() {
	return (
		<section className='section-footer'>
			<h1 className='section-footer__title'>Let's talk. You can contact me at:</h1>
			<div className='section-footer__contact'>
				<a className='section-footer__contact--link' href='mailto:hello@felipegonzalez.ca'>
					hello@felipegonzalez.ca
				</a>
				<a className='section-footer__contact--link' href='tel:+17786977909'>
					+1 (778) 697-7909
				</a>
			</div>

			<ContactForm />

			<div className='section-footer__social'>
				<h4 className='section-footer__social--title'>Follow me:</h4>
				<a href='https://github.com/psyout/' rel='noreferrer' target='_blank' className='section-footer__social--link'>
					<FaGithub className='section-footer__social--icon' />
				</a>

				<a href='https://www.linkedin.com/in/fgonzalezcare/' rel='noreferrer' target='_blank' className='section-footer__social--link'>
					<FaLinkedinIn className='section-footer__social--icon' />
				</a>
			</div>
		</section>
	);
}

export default FooterContent;
