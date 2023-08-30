import './App.scss';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import React, { useState } from 'react';
import Title from './components/Title/Title';
import MainProject from './components/MainProject/MainProject';
import TabSection from './components/TabSection/TabSection';
import Skills from './components/Skills/Skills';

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
					<MainProject />
					<TabSection />
					<Title
						head={`These are my skills and more…`}
						body={`I recently completed a web development bootcamp which allowed me to improve my skillset and also meet great people. During my time at BrainStation, I gained experience with a variety of web development technologies such as HTML5, CSS3.`}
					/>
					<Skills />
				</main>
			</div>
		</>
	);
}

export default App;
