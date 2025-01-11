import './Skills.scss';
import SkillsPage from '../ProgressBar/SkillsPage';
import SkillGroup from './SkillGroup';
import { SkillsData } from './SkillsData';
import Title from '../Title/Title';
import { TitleData } from '../Title/TitleData';

function Skills({ id }) {
	return (
		<div id="skills">
			<Title head={TitleData[1].title} body={TitleData[1].body} />
			<section className="skills">
				<div className="skills-container">
					{SkillsData.map((skills, index) => {
						return (
							<SkillGroup
								key={index}
								title={skills.title}
								body={skills.body}
								icon={skills.icon}
							/>
						);
					})}
				</div>
				<div className="skills-progress">
					<SkillsPage />
				</div>
			</section>
		</div>
	);
}

export default Skills;
