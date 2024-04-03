import './Intro.scss';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import ProfilePicture from '../../assets/images/profile-picture-square.jpg';

function Intro() {
	const titleTyped = useRef(null);

	useEffect(() => {
		const options = {
			strings: ['Hi there!', 'Hola!', 'Howdy!', 'Hello!'],
			typeSpeed: 150,
			backSpeed: 70,
			backDelay: 2000,
			loop: false,
			showCursor: false,
			cursorChar: '&nbsp;',
		};

		const typed = new Typed(titleTyped.current, options);

		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<section id='intro' className='intro'>
			<div className='intro__info'>
				<h1 className='intro__info--title'>
					<span ref={titleTyped}></span>
				</h1>

				<p className='intro__info--text'>
					I'm <mark>Felipe, a Front-end Developer</mark>. Building simple and beautiful things for complex interfaces is what I enjoy most.
				</p>
			</div>

			<div className='intro__placeholder'>
				<img className='intro__placeholder--img' src={ProfilePicture} alt='Profile' />
			</div>
		</section>
	);
}

export default Intro;
