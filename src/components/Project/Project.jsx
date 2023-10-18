import React, { useState } from 'react';
import './Project.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FaGithub } from 'react-icons/fa6';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import ButtonMain from '../ButtonMain/ButtonMain';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Project({ image, title, body, url, git, logo }) {
	const [open, setOpen] = useState(false);
	const [imageLoaded, setImageLoaded] = useState(false);

	const handleLogoClick = () => {
		if (!logo) {
			setOpen(true);
		}
	};

	const handleImageLoad = () => {
		setImageLoaded(true);
	};

	return (
		<div className='project'>
			<button type='button' onClick={handleLogoClick} style={{ width: '100%' }}>
				{open && !logo && <Lightbox open={open} close={() => setOpen(false)} slides={[{ src: image }]} initialIndex={0} disableArrows={true} disableScroll={true} />}
				<SimpleBar className='project__image' style={{ width: '100%', height: '100%' }}>
					<LazyLoadImage alt={title} src={image} effect={imageLoaded ? 'blur' : 'none'} onLoad={handleImageLoad} delayTime={300} />
				</SimpleBar>
			</button>
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
