import React from 'react';
import ProgressBar from './ProgressBar';
import { Slide } from 'react-awesome-reveal';

function SkillsPage() {
	const skillsData = [
		{ label: 'HTML', percentage: 95 },
		{ label: 'CSS', percentage: 95 },
		{ label: 'Sass', percentage: 85 },
		{ label: 'JS', percentage: 65 },
		{ label: 'React', percentage: 65 },
		{ label: 'Axios', percentage: 58 },
		{ label: 'Node', percentage: 55 },
		{ label: 'RWD', percentage: 95 },
		{ label: 'Figma', percentage: 70 },
		{ label: 'Design', percentage: 90 },
	];

	return (
		<div>
			{skillsData.map((skill, index) => (
				<Slide left triggerOnce key={index}>
					<ProgressBar label={skill.label} percentage={skill.percentage} />
				</Slide>
			))}
		</div>
	);
}

export default SkillsPage;
