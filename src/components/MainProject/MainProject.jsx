import './MainProject.scss';
import Wulen from '../../assets/images/code/vansippy01.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ButtonMain from '../ButtonMain/ButtonMain';
import { FaGithub } from 'react-icons/fa6';
import { TitleData } from '../Title/TitleData';
import Title from '../Title/Title';

function MainProject() {
	return (
		<div id="main">
			<Title head={TitleData[0].title} body={TitleData[0].body} />
			<section className="mainproject">
				<div className="mainproject__figure">
					<img src={Wulen} alt="Vansippy" />
				</div>
				<div className="mainproject__text">
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							width: '100%',
							justifyContent: 'flex-start',
						}}>
						<h5 className="mainproject__text--sub">
							JS | React | Axios | Mapbox | Yelp API
						</h5>
						<a
							className="mainproject__text--link"
							href="https://github.com/psyout/capstone-client"
							rel="noreferrer"
							target="_blank">
							<FaGithub className="mainproject__text--icon" />
						</a>
					</div>
					<h2 className="mainproject__text--title">{TitleData[2].title}</h2>
					<p className="mainproject__text--body">{TitleData[2].body}</p>
					<ButtonMain url={`https://vansippy.com`} title={`See Project`} />
				</div>
			</section>
		</div>
	);
}

export default MainProject;
