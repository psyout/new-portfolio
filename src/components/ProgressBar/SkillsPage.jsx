import React from 'react';
import ProgressBar from './ProgressBar';
import { Slide } from 'react-awesome-reveal';

function SkillsPage() {
	const skillsData = [
		{ label: 'HTML', percentage: 95 },
		{ label: 'CSS', percentage: 95 },
		{ label: 'JS', percentage: 65 },
		{ label: 'React', percentage: 60 },
		{ label: 'Next', percentage: 38 },
		{ label: 'Node', percentage: 50 },
		{ label: 'API', percentage: 50 },
		{ label: 'MySQL', percentage: 22 },
		{ label: 'RWD', percentage: 95 },
		{ label: 'Design', percentage: 95 },
		{ label: 'Figma', percentage: 90 },
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
