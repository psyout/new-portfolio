import React, { useEffect, useState } from 'react';
import { Blurhash } from 'react-blurhash';

function ImageComponent({ src }) {
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.onload = () => {
			setImageLoaded(true);
		};
		img.src = src;
	}, [src]);

	return (
		<>
			<div style={{ display: imageLoaded ? 'none' : 'inline' }}>
				<Blurhash hash='LSG9HwD$nNWH_4RiRioynh%NR-kB' width='200' height='200' resolutionX={32} resolutionY={32} punch={1} />
			</div>
			<img src={src} alt='' style={{ display: !imageLoaded ? 'none' : 'inline' }} />
		</>
	);
}

export default ImageComponent;
