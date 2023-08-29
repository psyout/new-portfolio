import './MainWork.scss';
import Wulen from '../../assets/images/wulen.jpg';

function MainWork() {
	return (
		<section className='mainwork'>
			<div className='mainwork__figure'>
				<img className='mainwork__figure--img' src={Wulen} alt='project about happy hour finder' />
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
