import ButtonMain from '../ButtonMain/ButtonMain';
import './Project.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FaGithub } from 'react-icons/fa6';

function Project({ image, title, body, url, git }) {
	return (
		<div className='project'>
			<SimpleBar className='project__image' style={{ width: '100%', height: '100%' }}>
				<img src={image} alt={title} />
			</SimpleBar>
			<div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
				<h3 className='project__title'>{title}</h3>
				{git && (
					<a className='project__title--link' href={git} rel='noreferrer' target='_blank'>
						<FaGithub className='project__title--icon' />
					</a>
				)}
			</div>
			<p className='project__body'>{body}</p>
			{url && <ButtonMain url={url} title={`See Project`} />}
		</div>
	);
}

export default Project;
