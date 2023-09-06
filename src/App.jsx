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
import { TitleData } from './components/Title/TitleData';

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
							<Title head={TitleData[0].title} body={TitleData[0].body} />
							<div id='main'>
								<MainProject />
							</div>
							<TabSection />
							<Title head={TitleData[1].title} body={TitleData[1].body} />
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
