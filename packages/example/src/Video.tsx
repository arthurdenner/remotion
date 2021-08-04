import React from 'react';
import {Composition} from 'remotion';
import RemoteVideo from './RemoteVideo';

export const Index: React.FC = () => {
	return (
		<Composition
			id="remote-video"
			component={RemoteVideo}
			width={1280}
			height={720}
			fps={30}
			durationInFrames={600}
		/>
	);
};
