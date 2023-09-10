import React from 'react';
import ProgressBar from './ProgressBar';
import { Slide } from 'react-awesome-reveal';

function SkillsPage() {
	const skillsData = [
		{ label: 'HTML', percentage: 90 },
		{ label: 'CSS', percentage: 80 },
		{ label: 'JS', percentage: 65 },
		{ label: 'React', percentage: 65 },
		{ label: 'Sass', percentage: 75 },
		{ label: 'Axios', percentage: 58 },
		{ label: 'Node', percentage: 50 },
		{ label: 'RWD', percentage: 80 },
		{ label: 'Figma', percentage: 70 },
		{ label: 'Design', percentage: 75 },
	];

	return (
		<div>
			{skillsData.map((skill, index) => (
				<Slide left key={index}>
					<ProgressBar label={skill.label} percentage={skill.percentage} />
				</Slide>
			))}
		</div>
	);
}

export default SkillsPage;
