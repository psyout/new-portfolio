import React, { useState } from 'react';
import './TabSection.scss';

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
						Web Development
					</button>
					<button className={`tabwork-button ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>
						Web Design
					</button>
					<button className={`tabwork-button ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>
						Branding
					</button>
				</div>
				<div className='tabwork-content'>
					<p className='tabwork-content__body'></p>
					{activeTab === 1 && (
						<div>
							<p>
								Tacos for breakfast, lunch and dinner. I’ve been following that taco truck around all day. Make it a double there pal. Tacos al pastor made with adobada meat. It’s long been rumored that the chupacabra is really just a crazed
								man who’s local taco shop went out of business.
							</p>
						</div>
					)}
					{activeTab === 2 && (
						<div>
							<p>
								Every day is taco ipsum tuesday. Tacos, again? This will be 5 times this week and it’s only Tuesday. Give me all your tacos. You see, the refried beans are really just the adhesive necessary to apply the soft tortilla to the
								hard taco shell. It’s a wonderful morning for breakfast tacos. Tacos for breakfast, lunch and dinner. I’ve been following that taco truck around all day. Make it a double there pal. Tacos al pastor made with adobada meat. It’s
								long been rumored that the chupacabra is really just a crazed man who’s local taco shop went out of business.
							</p>
							<p>
								Tacos for breakfast, lunch and dinner. Yeah, apparently the taco shack was robbed. They left the money but took the tacos. Ooh, with diced onions and a pinch of cilantro. Give me all your tacos. Fish tacos: lettuce or cabbage,
								pico de gallo, avocado and a sour cream or citrus/mayonnaise sauce, all placed on top of a corn or flour tortilla. It’s a wonderful morning for breakfast tacos. Add in a few el Pastor with guac and diced onions. Tacos, tacos,
								tacos. CARNITAS!! Side of rice and beans, please.
							</p>
						</div>
					)}
					{activeTab === 3 && (
						<div>
							<p>
								I think I’ve overdosed on tacos. I’d have to say, those tacos are on fleek. Tacos, again? This will be 5 times this week and it’s only Tuesday. Tacos dorados called flautas, or taquitos, for which the tortillas are filled with
								pre-cooked shredded chicken, beef or barbacoa, rolled into an elongated cylinder and deep-fried until crisp. These tacos are lit 🔥. Give me all your tacos. Tacos al pastor made with adobada meat.
							</p>
						</div>
					)}
					{activeTab === 3 && (
						<div>
							<p>
								I think I’ve overdosed on tacos. I’d have to say, those tacos are on fleek. Tacos, again? This will be 5 times this week and it’s only Tuesday. Tacos dorados called flautas, or taquitos, for which the tortillas are filled with
								pre-cooked shredded chicken, beef or barbacoa, rolled into an elongated cylinder and deep-fried until crisp. These tacos are lit 🔥. Give me all your tacos. Tacos al pastor made with adobada meat.
							</p>
						</div>
					)}
					{activeTab === 3 && (
						<div>
							<p>
								I think I’ve overdosed on tacos. I’d have to say, those tacos are on fleek. Tacos, again? This will be 5 times this week and it’s only Tuesday. Tacos dorados called flautas, or taquitos, for which the tortillas are filled with
								pre-cooked shredded chicken, beef or barbacoa, rolled into an elongated cylinder and deep-fried until crisp. These tacos are lit 🔥. Give me all your tacos. Tacos al pastor made with adobada meat.
							</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

export default TabSection;
