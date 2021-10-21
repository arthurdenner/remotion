import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {LottieAnimation} from './LottieAnimation';
import './style.css';

const LottieTesting: React.FC = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, height, fps, width} = useVideoConfig();
	const animationDelay = 1;
	const animationInput = frame - animationDelay;
	const textDelay = 30;
	const textInput = frame - textDelay;

	const animationOpacity = interpolate(
		animationInput,
		[0, 5, durationInFrames - 20, durationInFrames],
		[0, 1, 1, 0]
	);
	const textOpacity = interpolate(
		textInput,
		[0, 5, durationInFrames - textDelay - 20, durationInFrames - textDelay],
		[0, 1, 1, 0]
	);
	const scale = spring({
		fps,
		frame,
		from: 0.25,
		to: 1,
		config: {damping: 200},
	});
	const posY = interpolate(textInput, [0, 10], [50, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<div className="container" style={{height, width}}>
			<AbsoluteFill style={{opacity: animationOpacity}}>
				<LottieAnimation />
			</AbsoluteFill>
			<AbsoluteFill className="content" style={{opacity: textOpacity}}>
				<h1 style={{transform: `scale(${scale})`}}>Happy Halloween!</h1>
				<span style={{transform: `translateY(${posY}px)`}}>
					Animation by Roman Serebryakov
				</span>
			</AbsoluteFill>
		</div>
	);
};

export default LottieTesting;
