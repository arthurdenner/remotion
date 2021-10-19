import React from 'react';
import lottie, {AnimationItem} from 'lottie-web';
import {
	continueRender,
	delayRender,
	interpolate,
	useCurrentFrame,
} from 'remotion';

const getNextFrame = (
	currentFrame: number,
	totalFrames: number,
	loop: boolean
) => {
	return !loop
		? Math.min(currentFrame, totalFrames)
		: currentFrame % totalFrames;
};

export const LottieAnimation = () => {
	const animationRef = React.useRef<AnimationItem>();
	const containerRef = React.useRef<HTMLDivElement>(null);
	const [handle] = React.useState(delayRender);
	const frame = useCurrentFrame();
	const speed = 2;

	const expectedFrame = interpolate(frame, [-1, 0, 1], [-1, 0, speed]);

	React.useEffect(() => {
		if (!containerRef.current) {
			return;
		}

		animationRef.current = lottie.loadAnimation({
			container: containerRef.current,
			autoplay: false,
			path: 'https://assets9.lottiefiles.com/packages/lf20_rt9mhehe.json',
		});

		const {current: animation} = animationRef;
		const onComplete = () => {
			animation.setSpeed(speed);
			continueRender(handle);
		};

		animation.addEventListener('data_ready', onComplete);

		return () => {
			animation.removeEventListener('data_ready', onComplete);
			animation.destroy();
		};
	}, [handle]);

	React.useEffect(() => {
		if (!animationRef.current) {
			return;
		}

		const {totalFrames} = animationRef.current;
		// Switch the last param to `true` to loop it
		const segment = getNextFrame(expectedFrame, totalFrames, false);

		animationRef.current.goToAndStop(segment, true);
	}, [expectedFrame]);

	return <div ref={containerRef} className="animation" />;
};
