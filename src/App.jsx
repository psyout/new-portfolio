import './App.scss';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import React, { useState } from 'react';
import Title from './components/Title/Title';
import MainWork from './components/MainWork/MainWork';
import TabSection from './components/TabSection/TabSection';

function App({ head, body }) {
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
				<main className='main'>
					<Intro />
					<Title head='check this out' body={`I've been working in some new projects that I'd be updating soon, meanwhile take a look of what I did when I was doing a Web Development Bootcamp last April.`} />
					<MainWork />
					<TabSection />
				</main>
			</div>
		</>
	);
}

export default App;
