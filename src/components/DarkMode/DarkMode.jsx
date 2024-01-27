import { useState } from 'react';
import './DarkMode.scss';
import { FiSun, FiMoon } from 'react-icons/fi';

function DarkMode() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => {
		const newTheme = isDarkMode ? 'light' : 'dark';
		document.querySelector('body').setAttribute('data-theme', newTheme);
		setIsDarkMode(!isDarkMode);
	};

	return (
		<div className='theme-icon' onClick={toggleTheme}>
			{isDarkMode ? <FiSun className='fa-ico' /> : <FiMoon className='fa-ico' />}
		</div>
	);
}

export default DarkMode;
