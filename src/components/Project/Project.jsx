import ButtonMain from '../ButtonMain/ButtonMain';
import './Project.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

function Project({ image, title, body, url }) {
	return (
		<div className='project'>
			<SimpleBar className='project__image' style={{ width: '100%', height: '100%' }}>
				<img src={image} alt={title} />
			</SimpleBar>
			<h3 className='project__title'>{title}</h3>
			<p className='project__body'>{body}</p>
			{url && <ButtonMain url={url} title={`See Project`} />}
		</div>
	);
}

export default Project;
