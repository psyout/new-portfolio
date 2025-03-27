import './ProjectSection.scss';
import Project from '../Project/Project';
import { LogoData, DevelopmentData, WebData, GraphicData } from '../Project/ProjectData';
import { useState } from 'react';

function ProjectSection({ dataKey }) {
	const dataMap = {
		development: DevelopmentData,
		web: WebData,
		graphic: GraphicData,
		logo: LogoData,
	};

	const projectData = dataMap[dataKey] || [];
	const [visibleCount, setVisibleCount] = useState(2); // Initially show 2 projects

	const handleLoadMore = () => {
		setVisibleCount((prevCount) => prevCount + 2); // Load 2 more projects on each click
	};

	return (
		<section className="project-section">
			<div className="project-section--container">
				<ul className="project-section--container__list">
					{projectData.slice(0, visibleCount).map((project, index) => (
						<li key={index} className="project-section--container__element">
							<Project
								title={project.title}
								body={project.body}
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
				{visibleCount < projectData.length && (
					<button className="project-section--load-more" onClick={handleLoadMore}>
						Load More
					</button>
				)}
			</div>
		</section>
	);
}

export default ProjectSection;
