import { Card } from "@nextui-org/react";
import styles from "./HorizontalVideoCard.module.scss";

export default function HorizontalVideoCard({ video }) {
	return (
		<img src={video.thumbnail} alt={video.name} onClick={console.log(video)} />
		// <Card>
		// </Card>
	);
}
