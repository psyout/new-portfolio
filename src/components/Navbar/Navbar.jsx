import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuLeft, CgClose } from 'react-icons/cg';
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

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		closeMobileMenu();
	};

	return (
		<nav className='navbar'>
			<button className='navbar__toggle' onClick={toggleMobileMenu}>
				{mobileMenuOpen ? <CgClose /> : <CgMenuLeft />}
			</button>

			<h1 className='navbar__name'>{'{Fe}'}</h1>

			<div className='navbar__right-col'>
				<ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
					{MenuData.map((item, index) => (
						<li className='navbar-menu__item' key={index}>
							<i className={item.iconClass}></i>
							<Link
								className={`${theme === 'light' ? 'light-link' : 'dark-link'} ${item.cName}`}
								to={item.url}
								onClick={(e) => {
									e.preventDefault();
									scrollToSection(item.url.substring(1));
								}}>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
				<Button title={`Get my Resume`} url={`https://www.felipegonzalez.ca/felipe-gonzalez-cv.pdf`} />
			</div>
		</nav>
	);
}

export default Navbar;
