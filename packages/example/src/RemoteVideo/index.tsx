import {useRef} from 'react';
import {interpolate, useCurrentFrame, Video} from 'remotion';

const RemoteVideo: React.FC = () => {
	const frame = useCurrentFrame();
	const ref = useRef<HTMLVideoElement>(null);

	return (
		<Video
			ref={ref}
			volume={interpolate(frame, [0, 500], [1, 0], {extrapolateRight: 'clamp'})}
			crossOrigin="anonymous"
			src="https://iandevlin.github.io/mdn/video-player-with-captions/video/sintel-short.mp4"
			startFrom={600}
		/>
	);
};

export default RemoteVideo;
