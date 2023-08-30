import React from 'react';
import ProgressBar from './ProgressBar';

function SkillsPage() {
	return (
		<div>
			<ProgressBar label='HTML' percentage={90} />
			<ProgressBar label='CSS' percentage={80} />
			<ProgressBar label='JS' percentage={65} />
			<ProgressBar label='React' percentage={65} />
			<ProgressBar label='Sass' percentage={75} />
			<ProgressBar label='Axios' percentage={58} />
			<ProgressBar label='Node' percentage={50} />
			<ProgressBar label='RWD' percentage={80} />
			<ProgressBar label='Figma' percentage={70} />
			<ProgressBar label='Design' percentage={75} />
		</div>
	);
}

export default SkillsPage;
