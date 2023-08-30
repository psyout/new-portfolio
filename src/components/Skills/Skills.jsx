import './Skills.scss';
import image from '../../assets/images/bg-image.png';
import SkillsPage from '../ProgressBar/SkillsPage';

function Skills() {
	return (
		<section className='skills'>
			<div className='skills-container'>
				<div className='skills-container__group'>
					<img className='skills-container__group--image' src={image} alt='skill 1' />
					<div className='skills-container__text'>
						<h2 className='skills-container__text--title'>These are my skills and more…</h2>
						<p className='skills-container__text--body'>I recently completed a web development bootcamp which allowed me to improve my skillset and also meet great people. During my time at BrainStation.</p>
					</div>
				</div>
				<div className='skills-container__group'>
					<img className='skills-container__group--image' src={image} alt='skill 1' />
					<div className='skills-container__text'>
						<h2 className='skills-container__text--title'>These are my skills and more…</h2>
						<p className='skills-container__text--body'>I recently completed a web development bootcamp which allowed me to improve my skillset and also meet great people. During my time at BrainStation.</p>
					</div>
				</div>
				<div className='skills-container__group'>
					<img className='skills-container__group--image' src={image} alt='skill 1' />
					<div className='skills-container__text'>
						<h2 className='skills-container__text--title'>These are my skills and more…</h2>
						<p className='skills-container__text--body'>I recently completed a web development bootcamp which allowed me to improve my skillset and also meet great people. During my time at BrainStation.</p>
					</div>
				</div>
			</div>
			<div className='skills-progress'>
				<SkillsPage />
			</div>
		</section>
	);
}

export default Skills;
