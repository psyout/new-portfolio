import './App.scss';
import Navbar from './components/Navbar/Navbar';
import React, { useState } from 'react';

function App() {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
	};

	return (
		<>
			<div className='container'>
				<header className={`header ${theme}`}>
					<Navbar theme={theme} toggleTheme={toggleTheme} />
				</header>
			</div>
		</>
	);
}

export default App;
