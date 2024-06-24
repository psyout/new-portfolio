import './App.scss';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Navigation from './components/Navegation/Navigation';
import MainProject from './components/MainProject/MainProject';
import TabSection from './components/TabSection/TabSection';
import Skills from './components/Skills/Skills';
import FooterContent from './components/FooterContent/FooterContent';
// import Headroom from 'react-headroom';

function App() {
	return (
		<div className='container'>
			<header className='header'>
				<Navigation />
			</header>
			<main className='main'>
				<Intro />
				<About id='about' />
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
