import './Skills.scss';
import SkillsPage from '../ProgressBar/SkillsPage';
import SkillGroup from './SkillGroup';
import { SkillsData } from './SkillsData';

function Skills() {
	return (
		<section className='skills'>
			<div className='skills-container'>
				{SkillsData.map((skills, index) => {
					return <SkillGroup key={index} title={skills.title} body={skills.body} icon={skills.icon} />;
				})}
			</div>
			<div className='skills-progress'>
				<SkillsPage />
			</div>
		</section>
	);
}

export default Skills;
