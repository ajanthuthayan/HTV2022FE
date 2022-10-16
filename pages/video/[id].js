import styles from "../../styles/Video.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import VideoPlayer from "../../src/components/VideoPlayer";
import { BiArrowBack } from "react-icons/bi";

export default function VideoPage({ video }) {
	const [showBadge, setShowBadge] = useState(false);
	const badgeVisibleTime = [65, 72];

	const router = useRouter();

	const goBackHandler = (event) => {
		event.preventDefault();
		return router.push("/");
	};

	const handleVideoRef = () => {
		console.log(1, document?.getElementById("video"));
	};

	const playVideoHandler = (time) => {
		if (
			Math.round(time) >= badgeVisibleTime[0] &&
			Math.round(time) <= badgeVisibleTime[1]
		) {
			return setShowBadge(true);
		}
		return setShowBadge(false);
	};

	if (Object.keys(video).length > 0) {
		return (
			<div className={styles.container}>
				<div className={styles.overlay}>
					<div>
						<BiArrowBack
							className={styles.icon}
							size="32px"
							onClick={goBackHandler}
						/>
						<h1>{video.name}</h1>
					</div>
					{showBadge && (
						<div
							style={{
								backgroundColor: "#000000be",
								fontWeight: 500,
								color: "white",
								height: "fit-content",
								padding: "1rem",
								cursor: "pointer",
							}}
						>
							<a
								href="https://www.gapcanada.ca/browse/product.do?pid=861269003&vid=1&tid=gcpl000029&kwid=1&ap=7&gclid=CjwKCAjwtKmaBhBMEiwAyINuwMDkOLh8MWagb-f0YQKbjl_LaUnEWPP7rUy-Hgn2LjAogWjzujzvzxoCzOkQAvD_BwE&gclsrc=aw.ds&fbclid=IwAR3TWDZp3vnlowRLUqZ8yyUp1W5IlAR66XE_P0fw-A09v2TpBgCZGGZRZA4"
								rel="noreferrer"
								target="_blank"
							>
								Buy the same top here at GAP
							</a>
						</div>
					)}
				</div>
				<div className={styles.video}>
					<VideoPlayer
						video={video}
						onCurrentTime={playVideoHandler}
						onVideoRef={handleVideoRef}
					/>
				</div>
			</div>
		);
	}

	return <h1>Does not exist</h1>;
}

export async function getServerSideProps(context) {
	try {
		const response = await fetch(
			"https://edge.api.brightcove.com/playback/v1/accounts/5076297042001/playlists/ref:hackathon",
			{
				headers: {
					Accept:
						"Accept: application/json;pk=BCpkADawqM0U-1PMKODQJ8iEA4GfRjA9YdRjcgzkt0YoZ9vjpdyz2yb4RpFGxR581IzfRHdk4V-dTkDjC3B1TBy5LCn-UVZXpRryyb8YjU8jlfsXfKv27CXhyt_ZtE12m4EeqjGaL99pzkJ5",
				},
			}
		);
		if (response.ok) {
			const responseData = await response.json();
			const videos = await responseData.videos;
			const filteredVideos = videos.filter(
				(video) => video.id === context.query.id
			);

			if (filteredVideos.length > 0) {
				return {
					props: {
						video: filteredVideos[0],
					},
				};
			}
			return {
				props: {
					video: {},
				},
			};
		}
		throw new Error();
	} catch (error) {
		return {
			props: {
				video: {},
			},
		};
	}
}
