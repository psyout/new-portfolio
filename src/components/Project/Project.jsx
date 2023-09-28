import ButtonMain from '../ButtonMain/ButtonMain';
import './Project.scss';
import { Scrollbars } from 'react-custom-scrollbars';

function Project({ image, title, body, url }) {
	return (
		<div className='project'>
			<Scrollbars className='project__image' style={{ width: '100%' }}>
				<img src={image} alt={title} />
			</Scrollbars>
			<h3 className='project__title'>{title}</h3>
			<p className='project__body'>{body}</p>
			{url && <ButtonMain url={url} title={`See Project`} />}
		</div>
	);
}

export default Project;
