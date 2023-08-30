import React from 'react';
import './ProgressBar.scss';

function ProgressBar({ label, percentage }) {
	return (
		<div className='progress-bar'>
			<div className='progress-bar__label'>{label}</div>
			<div className='progress-bar__outer'>
				<div className='progress-bar__inner' style={{ width: `${percentage}%` }}></div>
			</div>
			<div className='progress-bar__percentage'>{percentage}%</div>
		</div>
	);
}

export default ProgressBar;
