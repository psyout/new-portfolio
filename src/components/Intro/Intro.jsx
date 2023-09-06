import './Intro.scss';
import ProfilePicture from '../../assets/images/profile-picture.png';
// import ProfilePicture from '../../assets/images/bg-image.png';

function Intro() {
	return (
		<section className='intro'>
			<div className='intro__info'>
				<h1 className='intro__info--title'>Hi there!</h1>
				<p className='intro__info--text'>
					I'm <mark>Felipe, a Front-end Developer</mark> with a decade of multimedia experience. I'm based in Vancouver where I'm available for full-time or freelance work, as well as working remotely for clients worldwide.
				</p>
				<br />
				<p className='intro__info--text'>
					I take a personal and creative approach to solving my clients' problems - whether that's designing a logo, building a new website, or managing a creative project from start to finish. My strength lies in my ten years of experience
					working across the entire digital design and development process, as well as my self-motivated and collaborative nature.
				</p>
			</div>
			<div className='intro__placeholder'>
				<img className='intro__placeholder--img' src={ProfilePicture} alt='this-is-myself' />
			</div>
		</section>
	);
}

export default Intro;
