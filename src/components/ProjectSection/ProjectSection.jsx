import './ProjectSection.scss';
import Project from '../Project/Project';
import { LogoData, DevelopmentData, WebData, GraphicData } from '../Project/ProjectData';

function ProjectSection({ dataKey }) {
	const dataMap = {
		development: DevelopmentData,
		web: WebData,
		graphic: GraphicData,
		logo: LogoData,
	};

	const projectData = dataMap[dataKey] || [];

	return (
		<section className='project-section'>
			<div className='project-section--container'>
				<ul className='project-section--container__list'>
					{projectData.map((project, index) => (
						<li key={index} className='project-section--container__element'>
							<Project
								title={project.title}
								body={project.body}
								loading='lazy'
								image={project.image}
								url={project.url}
								git={project.git}
								// Disable lightbox for logos
								logo={dataKey === 'logo'}
								tech={project.tech}
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default ProjectSection;
