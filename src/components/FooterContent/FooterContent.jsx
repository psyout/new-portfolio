import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import './FooterContent.scss';
// import { SocialIcon } from 'react-social-icons';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

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

			<div className='section-footer__social'>
				<Link className='section-footer__social--link'>
					<FaGithub className='section-footer__social--icon' />
				</Link>

				<Link className='section-footer__social--link'>
					<FaLinkedinIn className='section-footer__social--icon' />
				</Link>

				<Link className='section-footer__social--link'>
					<FaInstagram className='section-footer__social--icon' />
				</Link>

				{/* <Link className='section-footer__social--link'>
					<SocialIcon style={{ height: 80, width: 80 }} url='https://www.linkedin.com/in/fgonzalezcare/' />
				</Link>
				<Link className='section-footer__social--link'>
					<SocialIcon style={{ height: 80, width: 80 }} network='github' url='https://www.linkedin.com/in/fgonzalezcare/' />
				</Link>

				<Link className='section-footer__social--link'>
					<SocialIcon style={{ height: 80, width: 80 }} network='facebook' url='https://www.facebook.com/psypipe' />
				</Link> */}
			</div>
		</section>
	);
}

export default FooterContent;
