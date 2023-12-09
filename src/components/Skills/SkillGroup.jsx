import { Slide } from 'react-awesome-reveal';
import './Skills.scss';

function SkillGroup({ title, body, icon }) {
	return (
		<>
			<div className='skills-container__group'>
				<Slide left triggerOnce>
					<div className='skills-container__group--image'>{icon}</div>
				</Slide>
				<div className='skills-container__text'>
					<h2 className='skills-container__text--title'>{title}</h2>
					<p className='skills-container__text--body'>{body}</p>
				</div>
			</div>
		</>
	);
}

export default SkillGroup;
