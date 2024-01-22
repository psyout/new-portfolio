import { useState } from 'react';
import './DarkMode.scss';
import { FiSun, FiMoon } from 'react-icons/fi';

function DarkMode() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => {
		setIsDarkMode((previousIsDarkMode) => {
			const newTheme = previousIsDarkMode ? 'light' : 'dark';
			document.querySelector('body').setAttribute('data-theme', newTheme);
			return !previousIsDarkMode;
		});
	};

	return (
		<div className='theme-icon'>
			<input className='dark_mode_input' type='checkbox' id='darkmode-toggle' onChange={toggleTheme} checked={isDarkMode} />
			<label htmlFor='darkmode-toggle'>{isDarkMode ? <FiMoon /> : <FiSun />}</label>
		</div>
	);
}

export default DarkMode;
