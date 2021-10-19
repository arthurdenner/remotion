import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {LottieAnimation} from './LottieAnimation';
import './style.css';

const LottieTesting: React.FC = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, height, fps, width} = useVideoConfig();
	const input = frame - 1;

	const opacity = interpolate(
		input,
		[0, 5, durationInFrames - 20, durationInFrames],
		[0, 1, 1, 0]
	);
	const scale = spring({
		fps,
		frame,
		from: 0.25,
		to: 1,
		config: {damping: 200},
	});
	const posY = interpolate(input, [0, 10], [50, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<div className="container" style={{height, width}}>
			<h1 style={{opacity, transform: `scale(${scale})`}}>Happy Halloween!</h1>
			<div className="animation-container" style={{opacity}}>
				<LottieAnimation />
			</div>
			<span style={{opacity, transform: `translateY(${posY}px)`}}>
				Animation by Muhammad Yasir Ismail
			</span>
		</div>
	);
};

export default LottieTesting;
