import {FC, useEffect, useState} from 'react';
import {Video} from 'remotion';

const Features: FC = () => {
	const [canPlay, setCanPlay] = useState<boolean>();
	const tray = require('./tray.webm');
	const watermelon = require('./watermelon.webm');
	const textstickers = require('./textstickers.webm');

	useEffect(() => {
		const videoEl = document.createElement('video');

		setCanPlay(!!videoEl.canPlayType('video/webm'));
	}, []);

	if (canPlay === undefined) {
		return null;
	}

	return (
		<div
			style={{
				flex: 1,
				backgroundColor: 'white',
				justifyContent: 'center',
				alignItems: 'center',
				display: 'flex',
			}}
		>
			{!canPlay ? (
				<span>Your browser can&apos;t play webm videos</span>
			) : (
				<>
					<Video src={tray} style={{height: 400, width: 400}} />
					<Video src={textstickers} style={{height: 700, width: 700}} />
					<Video src={watermelon} style={{height: 700, width: 700}} />
				</>
			)}
		</div>
	);
};

export default Features;
