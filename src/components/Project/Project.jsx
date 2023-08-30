import ButtonMain from '../ButtonMain/ButtonMain';
import './Project.scss';

function Project({ image, title, body, url }) {
	return (
		<div className='project'>
			<img className='project__image' src={image} alt={title} />
			<h3 className='project__title'>{title}</h3>
			<p className='project__body'>{body}</p>
			<ButtonMain url={url} title={`See more...`} />
		</div>
	);
}

export default Project;
