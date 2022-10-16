import { useEffect, useState } from "react";

export default function VideoPlayer({ video, onCurrentTime, onVideoRef }) {
	const [videoRef, setVideoRef] = useState({});
	const [currentTime, setCurrentTime] = useState(0);

	const filterSources = video?.sources.filter(
		(source) => source.src !== undefined && source.container === "MP4"
	);

	useEffect(() => {
		setVideoRef(document.getElementById("video"));
		onVideoRef();
	}, [videoRef.currentTime]);

	const updateCurrentTime = (e) => {
		onCurrentTime(e.target.currentTime);
		setCurrentTime(e.target.currentTime);
	};

	return (
		<video
			id="video"
			width="100%"
			height="100%"
			controls
			autoPlay
			muted
			playsInline
			onTimeUpdate={updateCurrentTime}
			noFullScreen
		>
			{filterSources.map((source, index) => {
				return <source key={index} src={source.src} type="video/mp4" />;
			})}
			Your browser does not support the video tag.
		</video>
	);
}
