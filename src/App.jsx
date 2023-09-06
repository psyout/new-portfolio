import './App.scss';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import React, { useState } from 'react';
import Title from './components/Title/Title';
import MainProject from './components/MainProject/MainProject';
import TabSection from './components/TabSection/TabSection';
import Skills from './components/Skills/Skills';
import FooterContent from './components/FooterContent/FooterContent';
import Slide from 'react-reveal/Slide';

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
					<div>
						<Slide bottom>
							<Title
								head='check this out'
								body={
									<>
										I've been working on some new projects that I'd be updating soon, meanwhile take a look at what I did when I was doing a<mark>Web Development Bootcamp</mark> a few months ago.
									</>
								}
							/>
							<div id='main'>
								<MainProject />
							</div>
							<TabSection />
							<Title
								head={`these are my skills and more…`}
								body={
									<>
										I recently completed a web development bootcamp which allowed me to improve my skillset and also meet great people. During my time at <mark>BrainStation,</mark> I gained experience with a variety of web development
										technologies such as <mark>HTML5, CSS3, JS</mark> and more.
									</>
								}
							/>
						</Slide>
						<Slide bottom>
							<div id='skills'>
								<Skills />
							</div>
						</Slide>
					</div>
				</main>
				<div>
					<Slide bottom>
						<footer id='footer' className='footer'>
							<FooterContent />
						</footer>
					</Slide>
				</div>
			</div>
		</>
	);
}

export default App;
