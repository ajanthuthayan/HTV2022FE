import { Card } from "@nextui-org/react";
import styles from "./RatedVideoCard.module.scss";
import { useRouter } from "next/router";

export default function RatedVideoCard({ video, index }) {
	const router = useRouter();

	const onClickHandler = (e) => {
		e.preventDefault();
		return router.push(`/video/${video.id}`);
	};
	return (
		<div className={styles.container} onClick={onClickHandler}>
			<img src={video.thumbnail} alt={video.name} />
			<h3 className={styles.rank}>{index + 1}</h3>
		</div>
	);
}
