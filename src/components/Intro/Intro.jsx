import './Intro.scss';
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import ImageComponent from '../ImageComponent/ImageComponent';

function Intro() {
	const imgLazyLoadSrc = 'https://felipegonzalez.ca/static/media/profile-picture-square.f6ca4d7002bd982a3f5f.jpg';

	const titleTyped = useRef(null);

	const [isOpen, setIsOpen] = useState(false);

	const isMobile = window.matchMedia('(max-width: 940px)').matches;

	const mobileParagraphStyles = isMobile
		? {
				WebkitLineClamp: 8,
				WebkitBoxOrient: 'vertical',
				overflow: 'hidden',
				display: '-webkit-box',
		  }
		: {};
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

				<p className='intro__info--text' style={isOpen ? null : mobileParagraphStyles}>
					I'm <mark>Felipe, a Front-end Developer</mark>. Building simple and beautiful things for complex interfaces is what I enjoy most.
				</p>
			</div>

			<div className='intro__placeholder'>
				<div className='intro__placeholder--img'>
					<ImageComponent src={imgLazyLoadSrc} />
				</div>
			</div>
		</section>
	);
}

export default Intro;
