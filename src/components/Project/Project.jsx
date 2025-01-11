import { useState } from 'react';
import './Project.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FaGithub, FaUpRightFromSquare } from 'react-icons/fa6';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

function Project({ image, title, body, url, git, logo, tech }) {
	const [open, setOpen] = useState(false);

	const handleLogoClick = () => {
		if (!logo) {
			setOpen(true);
		}
	};

	return (
		<div className="project">
			<button type="button" onClick={handleLogoClick} style={{ width: '100%' }}>
				{open && !logo && (
					<Lightbox
						open={open}
						close={() => setOpen(false)}
						slides={[{ src: image }]}
						initialIndex={0}
						disableArrows={true}
						disableScroll={true}
					/>
				)}
				<SimpleBar className="project__image" style={{ width: '100%', height: '100%' }}>
					<img alt={title} src={image} />
				</SimpleBar>
			</button>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					width: '100%',
					justifyContent: 'space-between',
				}}>
				<h3 className="project__title">{title}</h3>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'row-reverse',
						gap: '0.5rem',
					}}>
					{url && (
						<a
							className="project__title--link"
							href={url}
							rel="noreferrer"
							target="_blank">
							<FaUpRightFromSquare className="project__title--icon" />
						</a>
					)}
					{git && (
						<a
							className="project__title--link"
							href={git}
							rel="noreferrer"
							target="_blank">
							<FaGithub className="project__title--icon" />
						</a>
					)}
				</div>
			</div>
			<p className="project__body">{body}</p>
			{
				<ul className="project__tech">
					{tech &&
						tech.map((technology, index) => (
							<li className="project__tech--list" key={index}>
								{technology}
							</li>
						))}
				</ul>
			}
		</div>
	);
}

export default Project;
