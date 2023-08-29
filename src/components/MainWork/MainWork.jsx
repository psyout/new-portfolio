import './MainWork.scss';
import Wulen from '../../assets/images/wulen.jpg';
import WulenTwo from '../../assets/images/wulen-2.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function MainWork() {
	return (
		<section className='mainwork'>
			<div className='mainwork__figure'>
				<Carousel showThumbs={false} showStatus={false} showIndicators={true}>
					<div>
						<img src={Wulen} alt='this-is-myself' />
					</div>
					<div>
						<img src={WulenTwo} alt='this-is-myself' />
					</div>
				</Carousel>
			</div>
			<div className='mainwork__text'>
				<h5 className='mainwork__text--sub'>React.js | Axios | Mapbox.js | Node.js</h5>
				<h2 className='mainwork__text--title'>Wülen Happy Hour Finder</h2>
				<p className='mainwork__text--body'>Develop an interactive app that allow users to search or filter happy hour special based on its geolocation, able to click on markers to see more details about the place, its ratings and menu. </p>
				<button className='mainwork-btn'>See project</button>
			</div>
		</section>
	);
}

export default MainWork;
