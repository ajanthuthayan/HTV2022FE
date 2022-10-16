import { Container, Grid } from "@nextui-org/react";
import HorizontalVideoCard from "../../components/HorizontalVideoCard";
import VerticalVideoCard from "../../components/VerticalVideoCard";
import styles from "./AuthenticatedContent.module.scss";
export default function AuthenticatedContent({
	horizontalMovies,
	verticalMovies,
}) {
	return (
		<Container>
			<h1>Home</h1>
			<div id="continue-watching">
				<h2>Continue Watching</h2>
				<Grid.Container gap={2} justify="center">
					{horizontalMovies?.slice(0, 4).map((video, index) => {
						return <HorizontalVideoCard key={index} video={video} />;
					})}
				</Grid.Container>
			</div>
			<div id="friends-watching">
				<h2>Your Friends Are Watching</h2>
				<Grid.Container gap={2} justify="center">
					{horizontalMovies?.slice(4, 8).map((video, index) => {
						return <HorizontalVideoCard key={index} video={video} />;
					})}
				</Grid.Container>
			</div>
			<div id="friends-watching">
				<h2>Your Friends Enjoyed</h2>
				<Grid.Container gap={2} justify="center">
					{horizontalMovies?.slice(8, 13).map((video, index) => {
						return <HorizontalVideoCard key={index} video={video} />;
					})}
				</Grid.Container>
			</div>
		</Container>
	);
}
