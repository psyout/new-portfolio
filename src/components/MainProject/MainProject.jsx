import './MainProject.scss';
import Wulen from '../../assets/images/code/wulen.jpg';
import WulenTwo from '../../assets/images/code/wulen2.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ButtonMain from '../ButtonMain/ButtonMain';

function MainProject() {
	return (
		<section className='mainproject'>
			<div className='mainproject__figure'>
				<Carousel showThumbs={false} showStatus={false} showIndicators={true}>
					<div>
						<img src={Wulen} alt='this-is-myself' />
					</div>
					<div>
						<img src={WulenTwo} alt='this-is-myself' />
					</div>
				</Carousel>
			</div>
			<div className='mainproject__text'>
				<h5 className='mainproject__text--sub'>
					<mark style={{ backgroundColor: '#9fd3c7', color: '#ffffff' }}>React.js | Axios | Mapbox.js | Node.js</mark>
				</h5>
				<h2 className='mainproject__text--title'>Wülen Happy Hour Finder</h2>
				<p className='mainproject__text--body'>
					This React app was my Capstone project that combines Front and Back-end development using Mapbox.js and Axios for API requests. I used Material UI for an attractive design and allows users to search and filter nearby happy hour
					specials based on geolocation. Users can click on markers to view details, ratings, and menus for each place.
				</p>
				<ButtonMain url={`https://wulen.netlify.app`} title={`See Project`} />
			</div>
		</section>
	);
}

export default MainProject;
