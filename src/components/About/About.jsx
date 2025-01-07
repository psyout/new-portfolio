import React from 'react';
import Button from '../Button/Button';
import './About.scss';
import { motion } from 'framer-motion';

function About() {
	return (
		<section id="about" className="about">
			<div className="about-container">
				<motion.h1
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0 }}
					viewport={{ once: true }}
					repeat={Infinity}
					className="about-container__title">
					01. About me
				</motion.h1>

				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
					viewport={{ once: true }}
					className="about-container__text">
					I'm driven by a relentless desire to learn and explore novel ideas. Presently
					located in the vibrant city of Vancouver where I'm available for full-time or
					freelance work opportunities, as well as working remotely for clients worldwide.
				</motion.p>
				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1 }}
					viewport={{ once: true }}
					className="about-container__text">
					I take a personal and creative approach to solving my clients' problems -
					whether that's developing a web app, landing page, or managing a creative
					project from start to finish. My strength lies in my ten years of experience
					working across the entire digital design and development process, as well as my
					self-motivated and collaborative nature.
				</motion.p>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1.5 }}
					viewport={{ once: true }}>
					<Button
						title={`Get Resume`}
						url={`https://www.felipegonzalez.io/felipe-gonzalez-resume.pdf`}
					/>
				</motion.div>
			</div>
		</section>
	);
}

export default About;
