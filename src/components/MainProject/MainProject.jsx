import './MainProject.scss';
import Wulen from '../../assets/images/wulen.jpg';
import WulenTwo from '../../assets/images/wulen-2.jpg';
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
				<h5 className='mainproject__text--sub'>React.js | Axios | Mapbox.js | Node.js</h5>
				<h2 className='mainproject__text--title'>Wülen Happy Hour Finder</h2>
				<p className='mainproject__text--body'>
					React App with Front / Back End development using Mapbox.js and Axios to make API requests. Used Material UI for enhance design. Allow users to search or filter happy hour special based on its geolocation, able to click on markers to
					see more details about the place, its ratings and menu.{' '}
				</p>
				<ButtonMain url={`https://wulen.netlify.app`} title={`See Project`} />
			</div>
		</section>
	);
}

export default MainProject;
