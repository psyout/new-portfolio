import './Intro.scss';
import ProfilePicture from '../../assets/images/profile-picture.png';
import { Fade, Slide } from 'react-awesome-reveal';

function Intro() {
	return (
		<Fade triggerOnce cascade>
			<section className='intro'>
				<div className='intro__info'>
					<Fade triggerOnce delay={1e2} cascade damping={1e-1}>
						<h1 className='intro__info--title'>Hi there!</h1>
						<p className='intro__info--text'>
							I'm <mark>Felipe, a Front-end Developer</mark> with a decade of multimedia experience. I'm based in Vancouver where I'm available for full-time or freelance work, as well as working remotely for clients worldwide.
						</p>
					</Fade>
					<br />
					<Fade triggerOnce delay={1e3} cascade damping={1e-1}>
						<p className='intro__info--text'>
							I take a personal and creative approach to solving my clients' problems - whether that's developing a web app, designing a logo or managing a creative project from start to finish. My strength lies in my ten years of experience
							working across the entire digital design and development process, as well as my self-motivated and collaborative nature.
						</p>
					</Fade>
				</div>
				<Slide left triggerOnce>
					<div className='intro__placeholder'>
						<img className='intro__placeholder--img' src={ProfilePicture} alt='this-is-myself' />
					</div>
				</Slide>
			</section>
		</Fade>
	);
}

export default Intro;
