import React from 'react';
import Button from '../Button/Button';
import './About.scss';

function About() {
	return (
		<section id='about' className='about'>
			<div className='about-container'>
				<h1 className='about-container__title'>01. About me</h1>
				<p className='about-container__text'>
					I'm driven by a relentless desire to learn and explore novel ideas. Presently located in the vibrant city of Vancouver where I'm available for full-time or freelance work opportunities, as well
					as working remotely for clients worldwide.
					<br />
					<br />I take a personal and creative approach to solving my clients' problems - whether that's developing a web app, landing page, or managing a creative project from start to finish. My strength
					lies in my ten years of experience working across the entire digital design and development process, as well as my self-motivated and collaborative nature.
				</p>
				<Button title={`Get Resume`} url={`https://www.felipegonzalez.ca/felipe-gonzalez-resume.pdf`} />
			</div>
		</section>
	);
}

export default About;
