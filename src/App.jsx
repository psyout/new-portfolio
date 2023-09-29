import './App.scss';
import Intro from './components/Intro/Intro';
import Title from './components/Title/Title';
import Navigation from './components/Navegation/Navigation';
import MainProject from './components/MainProject/MainProject';
import TabSection from './components/TabSection/TabSection';
import Skills from './components/Skills/Skills';
import FooterContent from './components/FooterContent/FooterContent';
import { Slide } from 'react-awesome-reveal';
import { TitleData } from './components/Title/TitleData';
import Headroom from 'react-headroom';

function App() {
	return (
		<div id='container' className='container'>
			<Headroom>
				<header className='header'>
					<Navigation />
				</header>
			</Headroom>
			<main className='main'>
				<Intro />
				<div>
					<Slide bottom triggerOnce>
						<div id='main'>
							<Title head={TitleData[0].title} body={TitleData[0].body} />
							<MainProject />
						</div>
						<TabSection />
					</Slide>
					<Slide bottom triggerOnce>
						<div id='skills'>
							<Title head={TitleData[1].title} body={TitleData[1].body} />
							<Skills />
						</div>
					</Slide>
				</div>
			</main>
			<footer className='footer'>
				<Slide bottom triggerOnce>
					<div id='footer'>
						<FooterContent />
					</div>
				</Slide>
			</footer>
		</div>
	);
}

export default App;
