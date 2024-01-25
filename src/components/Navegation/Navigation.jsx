import React, { useState } from 'react';
import './Navigation.scss';
import Button from '../Button/Button';
import DarkMode from '../DarkMode/DarkMode';

function Header() {
	const [isActive, setIsActive] = useState(false);

	const toggleMenu = () => {
		setIsActive(!isActive);
	};

	const closeMenu = () => {
		setIsActive(false);
	};

	const handleMenuClick = (e, targetId) => {
		e.preventDefault();
		closeMenu();
		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<nav className={`navbar ${isActive ? 'active' : ''}`}>
			<a
				href='#intro'
				className='nav-branding'
				aria-label='Scroll to top'
				onClick={(e) => {
					e.preventDefault();
					window.scrollTo(0, 0);
				}}>
				{'FG'}
			</a>
			<div className='navbar-container'>
				<ul className={`nav-menu ${isActive ? 'active' : ''}`}>
					<li className='nav-item'>
						<a href='#main' className='nav-link' onClick={(e) => handleMenuClick(e, 'main')} rel='noopener noreferrer'>
							What I've done
						</a>
					</li>
					<li className='nav-item'>
						<a href='#skills' className='nav-link' onClick={(e) => handleMenuClick(e, 'skills')} rel='noopener noreferrer'>
							Who I am
						</a>
					</li>
					<li className='nav-item'>
						<a href='#footer' className='nav-link' onClick={(e) => handleMenuClick(e, 'footer')} rel='noopener noreferrer'>
							Contact me
						</a>
					</li>

					<Button title={`Get Resume`} url={`https://www.felipegonzalez.ca/resume_fgonzalez.pdf`} />
				</ul>
				<div style={{ order: '2' }} className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
					<span className='bar'></span>
					<span className='bar'></span>
					<span className='bar'></span>
				</div>
				<DarkMode />
			</div>
		</nav>
	);
}

export default Header;
