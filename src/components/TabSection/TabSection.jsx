import React, { useState } from 'react';
import './TabSection.scss';
import { FaCodeMerge, FaObjectGroup } from 'react-icons/fa6';
import ProjectSection from '../ProjectSection/ProjectSection';

function TabSection() {
	const [activeTab, setActiveTab] = useState(1);
	const handleTabClick = (tabNumber) => {
		setActiveTab(tabNumber);
	};

	// Define content for each tab
	const tabContent = [
		{ tab: 1, content: <ProjectSection dataKey="development" /> },
		{ tab: 2, content: <ProjectSection dataKey="web" /> },
	];

	// Filter content based on active tab
	const carouselItems = tabContent
		.filter((item) => item.tab === activeTab)
		.map((item) => item.content);

	return (
		<section className="tabwork">
			<h3 className="tabwork-title">Some other projects</h3>
			<div className="tabwork-section">
				<div className="tabwork-buttons">
					<button
						className={`tabwork-button ${activeTab === 1 ? 'active' : ''}`}
						onClick={() => handleTabClick(1)}>
						<FaCodeMerge style={{ marginRight: '0.3rem' }} />
						Web Development
					</button>
					<button
						className={`tabwork-button ${activeTab === 2 ? 'active' : ''}`}
						onClick={() => handleTabClick(2)}>
						<FaObjectGroup style={{ marginRight: '0.3rem' }} />
						Web Design
					</button>
				</div>
				<div className="tabwork-content">{carouselItems}</div>
			</div>
		</section>
	);
}

export default TabSection;
