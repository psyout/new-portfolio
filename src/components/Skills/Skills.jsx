import './Skills.scss';
import SkillsPage from '../ProgressBar/SkillsPage';
import { FaSquareJs, FaHtml5, FaCss3Alt } from 'react-icons/fa6';
import Slide from 'react-reveal/Slide';

function Skills() {
	return (
		<section className='skills'>
			<div className='skills-container'>
				<div className='skills-container__group'>
					<Slide left>
						<FaHtml5
							className='skills-container__group--image'
							style={{
								width: '80px',
								height: '80px',
							}}
						/>
					</Slide>
					<div className='skills-container__text'>
						<h2 className='skills-container__text--title'>Since version 4.0</h2>
						<p className='skills-container__text--body'>
							My HTML skills prove incredibly useful in React. Writing JSX becomes intuitive, like crafting HTML with JavaScript's power. I create dynamic components, conditionally render content, and iterate through data arrays seamlessly.
							This mix of HTML and JavaScript in JSX simplifies React development.
						</p>
					</div>
				</div>
				<div className='skills-container__group'>
					<Slide left>
						<FaCss3Alt
							className='skills-container__group--image'
							style={{
								width: '80px',
								height: '80px',
							}}
						/>
					</Slide>
					<div className='skills-container__text'>
						<h2 className='skills-container__text--title'>Styling for life</h2>
						<p className='skills-container__text--body'>
							{' '}
							I've mastered the art of responsive design, creating layouts that seamlessly adapt to any screen size. Playing around with animations and transitions has also become second nature, adding that extra touch of life to websites.
						</p>
					</div>
				</div>
				<div className='skills-container__group'>
					<Slide left>
						<FaSquareJs
							className='skills-container__group--image'
							style={{
								width: '80px',
								height: '80px',
							}}
						/>
					</Slide>
					<div className='skills-container__text'>
						<h2 className='skills-container__text--title'>JavaScript, my daily adventure</h2>
						<p className='skills-container__text--body'>
							Able to create dynamic components, managing state, and handling logic. This leads to responsive, interactive, and high-performance React apps. Learning React Native and Electron.js for mobile apps at the moment. It's like a
							treasure hunt, with discoveries growing.
						</p>
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
