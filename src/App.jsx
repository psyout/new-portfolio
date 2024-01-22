import './App.scss';
import Intro from './components/Intro/Intro';
import Navigation from './components/Navegation/Navigation';
import MainProject from './components/MainProject/MainProject';
import TabSection from './components/TabSection/TabSection';
import Skills from './components/Skills/Skills';
import FooterContent from './components/FooterContent/FooterContent';
import Headroom from 'react-headroom';

function App() {
	return (
		<div className='container'>
			<Headroom>
				<header className='header'>
					<Navigation />
				</header>
			</Headroom>
			<main className='main'>
				<Intro />
				<MainProject id='main' />
				<TabSection />
				<Skills id='skills' />
			</main>
			<footer className='footer' id='footer'>
				<FooterContent />
			</footer>
		</div>
	);
}

export default App;
