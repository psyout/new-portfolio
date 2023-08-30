import './ProjectSection.scss';
import Project from '../Project/Project';
import { BrandingData, DevelopmentData, WebData } from '../Project/ProjectData';

function ProjectSection({ dataKey }) {
	const dataMap = {
		development: DevelopmentData,
		web: WebData,
		branding: BrandingData,
	};

	const projectData = dataMap[dataKey] || [];

	return (
		<section className='project-section'>
			<div className='project-section--container'>
				<ul className='project-section--container__list'>
					{projectData.map((project, index) => (
						<li key={index} className='project-section--container__element'>
							<Project title={project.title} body={project.body} image={project.image} url={project.url} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default ProjectSection;
