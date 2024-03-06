import React from 'react';

// Define your JSX fragment for double line breaks
const doubleBreak =
	window.innerWidth <= 768 ? (
		<>
			<br />
			<br />
		</>
	) : (
		<>
			<br />
		</>
	);

export const TitleData = [
	{
		title: 'Work in process...',
		body: <span>Dive into my recent Web Development Bootcamp capstone project, while I update my Happy Hour Finder app with new spots. Stay tuned for fresh deals in town!</span>,
	},
	{
		title: 'these are my skills and more…',
		body: (
			<span>
				Proficient in key web development languages and frameworks such as <mark>HTML, CSS, JavaScript, and React.</mark> My expertise extends to crafting scalable UI components with React, and I possess
				Back-End skills utilizing <mark>Axios and NodeJS.</mark> Ready to deliver practical and effective web solutions.
			</span>
		),
	},
	{
		title: 'Wülen Happy Hour Finder',
		body: (
			<span>
				This React app was my Capstone project that combines Front and Back-end development using Mapbox.js and Axios for API requests. I used Material UI for an attractive design and allows users to
				search and filter nearby happy hour specials based on geolocation. Users can click on markers to view details, ratings, and menus for each place.
			</span>
		),
	},
	{
		title: '', // Empty title
		body: 'With a passion for Javascript, ReactJS and web technologies. Enthusiastic, hardworking and innovative.',
	},
	{
		title: 'About Me',
		body: (
			<span>
				I'm driven by a relentless desire to learn and explore novel ideas. Presently located in the vibrant city of Vancouver where I'm available for full-time or freelance work opportunities, as well as
				working remotely for clients worldwide. {doubleBreak} I take a personal and creative approach to solving my clients' problems - whether that's developing a web app, landing page, or managing a
				creative project from start to finish. My strength lies in almost ten years of experience working across the entire digital design and development process, as well as my self-motivated and
				collaborative
			</span>
		),
	},
];
