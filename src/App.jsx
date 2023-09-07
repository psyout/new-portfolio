import './App.scss';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Title from './components/Title/Title';
import MainProject from './components/MainProject/MainProject';
import TabSection from './components/TabSection/TabSection';
import Skills from './components/Skills/Skills';
import FooterContent from './components/FooterContent/FooterContent';
import Slide from 'react-reveal/Slide';
import { TitleData } from './components/Title/TitleData';

function App() {
	return (
		<div className='container'>
			<header className='header'>
				<Navbar />
			</header>
			<main className='main'>
				<Intro />
				<div>
					<Slide bottom>
						<div id='main'>
							<Title head={TitleData[0].title} body={TitleData[0].body} />
							<MainProject />
						</div>
						<TabSection />
					</Slide>
					<Slide bottom>
						<div id='skills'>
							<Title head={TitleData[1].title} body={TitleData[1].body} />
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
	);
}

export default App;
