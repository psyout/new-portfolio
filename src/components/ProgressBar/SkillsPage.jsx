import React from 'react';
import ProgressBar from './ProgressBar';

function SkillsPage() {
	return (
		<div>
			<ProgressBar label='HTML' percentage={95} />
			<ProgressBar label='CSS' percentage={90} />
			<ProgressBar label='JS' percentage={75} />
			<ProgressBar label='React' percentage={75} />
			<ProgressBar label='Sass' percentage={85} />
			<ProgressBar label='Axios' percentage={68} />
			<ProgressBar label='RWD' percentage={90} />
			<ProgressBar label='Figma' percentage={80} />
		</div>
	);
}

export default SkillsPage;
