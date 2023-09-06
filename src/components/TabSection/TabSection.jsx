import React, { useState } from 'react';
import './TabSection.scss';
import { FaCodeMerge, FaObjectGroup, FaFeatherPointed, FaSwatchbook } from 'react-icons/fa6';
import ProjectSection from '../ProjectSection/ProjectSection';

function TabSection() {
	const [activeTab, setActiveTab] = useState(1);
	const handleTabClick = (tabNumber) => {
		setActiveTab(tabNumber);
	};

	return (
		<section className='tabwork'>
			<h3 className='tabwork-title'>Some other little projects</h3>
			<div className='tabwork-section'>
				<div className='tabwork-buttons'>
					<button className={`tabwork-button ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
						<FaCodeMerge style={{ marginRight: '0.3rem' }} />
						Web Development
					</button>
					<button className={`tabwork-button ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>
						<FaObjectGroup style={{ marginRight: '0.3rem' }} />
						Web Design
					</button>
					<button className={`tabwork-button ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>
						<FaSwatchbook style={{ marginRight: '0.3rem' }} />
						Graphic Design
					</button>
					<button className={`tabwork-button ${activeTab === 4 ? 'active' : ''}`} onClick={() => handleTabClick(4)}>
						<FaFeatherPointed style={{ marginRight: '0.3rem' }} />
						Logos
					</button>
				</div>
				<div className='tabwork-content'>
					{activeTab === 1 && <ProjectSection dataKey='development' />}
					{activeTab === 2 && <ProjectSection dataKey='web' />}
					{activeTab === 3 && <ProjectSection dataKey='graphic' />}
					{activeTab === 4 && <ProjectSection dataKey='logo' />}
				</div>
			</div>
		</section>
	);
}

export default TabSection;
