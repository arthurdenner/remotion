import {Audio, interpolate, Sequence} from 'remotion';
// import music from './music.mp3';

const AudioTesting: React.FC = () => {
	return (
		<div>
			<Sequence from={100} durationInFrames={100}>
				<Audio
					// startFrom={100}
					// endAt={200}
					// src={music}
					volume={(f) =>
						interpolate(f, [0, 50, 100], [0, 1, 0], {
							extrapolateLeft: 'clamp',
							extrapolateRight: 'clamp',
						})
					}
				>
					<source src="http://127.0.0.1:8080/horse.ogg" type="audio/ogg" />
					<source src="http://127.0.0.1:8080/horse.mp3" type="audio/mpeg" />
				</Audio>
			</Sequence>
		</div>
	);
};

export default AudioTesting;
