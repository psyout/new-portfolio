import { useState, useEffect } from 'react';
import './DarkMode.scss';
import { FiSun, FiMoon } from 'react-icons/fi';

function DarkMode() {
	// Retrieve the dark mode preference from localStorage
	const savedTheme = localStorage.getItem('theme');
	const [isDarkMode, setIsDarkMode] = useState(savedTheme === 'dark');

	// Update localStorage with the new theme
	const toggleTheme = () => {
		const newTheme = isDarkMode ? 'light' : 'dark';
		document.querySelector('body').setAttribute('data-theme', newTheme);
		localStorage.setItem('theme', newTheme);
		setIsDarkMode(!isDarkMode);
	};

	// Update body theme attribute when component mounts
	useEffect(() => {
		const theme = isDarkMode ? 'dark' : 'light';
		document.querySelector('body').setAttribute('data-theme', theme);
	}, [isDarkMode]);

	return (
		<div className='theme-icon' onClick={toggleTheme}>
			{isDarkMode ? <FiSun className='fa-ico' /> : <FiMoon className='fa-ico' />}
		</div>
	);
}

export default DarkMode;
