import './Intro.scss';
import ProfilePicture from '../../assets/images/profile-picture-square.jpg';
import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';

function Intro() {
	return (
		<section id="intro" className="intro">
			<div className="intro__info">
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}>
					<TypeAnimation
						sequence={[
							'Front-end Developer',
							1000,
							'Web Designer',
							1000,
							'Enthusiast',
							1000,
						]}
						speed={10}
						repeat={Infinity}
						className="intro__info--title"
					/>
				</motion.div>

				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
					viewport={{ once: true }}
					className="intro__info--title">
					Hey there! I'm <span>Felipe,</span>
				</motion.p>

				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1 }}
					viewport={{ once: true }}
					className="intro__info--text">
					Building simple and beautiful things for complex interfaces is what I enjoy
					most.
				</motion.p>
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.4,
					scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
				}}
				className="intro__placeholder">
				<img className="intro__placeholder--img" src={ProfilePicture} alt="Profile" />
			</motion.div>
		</section>
	);
}

export default Intro;
