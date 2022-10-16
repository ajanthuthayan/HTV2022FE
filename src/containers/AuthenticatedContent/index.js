import { Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import RatedVideoCard from "../../components/RatedVideoCard";
import styles from "./AuthenticatedContent.module.scss";
import { AiFillPlayCircle } from "react-icons/ai";
import GridVideoCard from "../../components/GridVideoCard";

export default function AuthenticatedContent({
	horizontalMovies,
	verticalMovies,
}) {
	const router = useRouter();

	const clickPlayOnHeader = (e) => {
		e.preventDefault();
		router.push(`/video/${header.id}`);
	};
	const header = {
		id: "6264908206001",
		description:
			"After getting a green card in exchange for assassinating a Cuban government official, Tony Montana (Al Pacino) stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.",
		src: "https://wallpaperaccess.com/full/798840.jpg",
	};

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.col1}>
					<AiFillPlayCircle
						className={styles.icon}
						style={{ color: "#f5a524" }}
						onClick={clickPlayOnHeader}
					/>
				</div>
				<div className={styles.col2}>
					<h1>Scarface</h1>
					<p>{header.description}</p>
					<div className={styles.duration}>
						<h5>Duration</h5>
						<p>2h 50m</p>
					</div>
					<div className={styles.ratings}>
						<div className={styles["global-ratings"]}>
							<h5>Global Ratings</h5>
							<p>4.5</p>
						</div>
						<div className={styles["friend-ratings"]}>
							<h5>Friend Ratings</h5>
							<p>4.8</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.row1}>
				<h2>Top Movies Rated by Friends</h2>
				<div className={styles["card-container"]}>
					{horizontalMovies?.slice(1, 4).map((video, index) => {
						return <RatedVideoCard key={index} index={index} video={video} />;
					})}
				</div>
			</div>
			<div className={styles.row2}>
				<div className={styles.heading}>
					<h2>What Your Friends Are Currently Watching</h2>
					<p>View More</p>
				</div>
				<div className={styles["card-container"]}>
					{horizontalMovies?.slice(5, 10).map((video, index) => {
						return <GridVideoCard key={index} index={index} video={video} />;
					})}
				</div>
			</div>
		</div>
	);
}
