import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuLeft, CgSun, CgMoon, CgClose } from 'react-icons/cg';
import './Navbar.scss';
import { MenuData } from './MenuData';
import Button from '../Button/Button';

function Navbar({ theme, toggleTheme }) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setMobileMenuOpen(false);
	};

	const handleThemeToggle = () => {
		if (mobileMenuOpen) {
			setMobileMenuOpen(false);
		}
		toggleTheme();
	};

	return (
		<nav className={`navbar ${theme}`}>
			<button className={`navbar__toggle ${theme}`} onClick={toggleMobileMenu}>
				{mobileMenuOpen ? <CgClose /> : <CgMenuLeft />}
			</button>

			<ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
				{MenuData.map((item, index) => (
					<li key={index}>
						<Link className={item.cName} href={item.url} onClick={closeMobileMenu}>
							{item.title === 'Get Resume' ? <mark>Get Resume</mark> : item.title}
						</Link>
					</li>
				))}
			</ul>

			<h1 className='navbar__name'>{'{Fe}'}</h1>

			<div className='navbar__right-col'>
				<Button title={`Get Resume`} />
				<div className='navbar__theme' onClick={handleThemeToggle}>
					{theme === 'light' ? <CgSun className='sun-clicked' /> : <CgMoon className='moon-clicked' />}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
