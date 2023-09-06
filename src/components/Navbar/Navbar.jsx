import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuLeft, CgSun, CgMoon, CgClose } from 'react-icons/cg';
import { MenuData } from './MenuData';
import Button from '../Button/Button';
import './Navbar.scss';

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
					<li className='navbar-menu__item' key={index}>
						<i className={item.iconClass}></i>
						<Link className={`${theme === 'light' ? 'light-link' : 'dark-link'} ${item.cName}`} to={item.url} onClick={closeMobileMenu}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>

			<h1 className='navbar__name'>{'{Fe}'}</h1>

			<div className='navbar__right-col'>
				<Button title={`Get Resume`} url={`https://www.felipegonzalez.ca/felipe-gonzalez-cv.pdf`} />
				<div className='navbar__theme' onClick={handleThemeToggle}>
					{theme === 'light' ? <CgSun className='sun-clicked' /> : <CgMoon className='moon-clicked' />}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
