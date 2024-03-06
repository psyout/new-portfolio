import React from 'react';
import Button from '../Button/Button';
import './About.scss';
import { TitleData } from '../Title/TitleData';

function About() {
	return (
		<section id='about' className='about'>
			<div>
				<h3 className='about__intro'>{TitleData[3].body}</h3>
			</div>
			<div>
				<h1 className='about__title'>{TitleData[4].title}</h1>
				<p className='about__text'>{TitleData[4].body}</p>
				<Button title={`Get Resume`} url={`https://www.felipegonzalez.ca/resume_fgonzalez.pdf`} />
			</div>
		</section>
	);
}

export default About;
