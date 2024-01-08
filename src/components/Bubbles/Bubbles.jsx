import React from 'react';
import './Bubbles.scss';

function Bubbles() {
	const mySkills = [
		'HTML',
		'CSS',
		'SASS',
		'BEM',
		'Flexbox',
		'Grid Layout',
		'Responsive Design',
		'Boostrap',
		'Tailwind',
		'JavaScript',
		'React',
		'Git',
		'Next',
		'Node',
		'API',
		'JSON',
		'MySQL',
		'Wordpress',
		'Hosting',
		'Figma',
		'Photoshop',
		'Illustrator',
		'Wireraming',
	];
	return (
		<>
			<h4 className='bubbles-title'>Skillset</h4>
			<ul className='bubbles-list'>
				{mySkills.map((item) => (
					<li key={item} className='bubbles-item'>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default Bubbles;
