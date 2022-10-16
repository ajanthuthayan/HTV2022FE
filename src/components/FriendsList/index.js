import { User } from "@nextui-org/react";
import styles from "./FriendsList.module.scss";

export default function FriendsList() {
	const pepe =
		"https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg";

	const TESTUSERS = [
		{
			id: 1,
			name: "Aiden Jolley-Ruhn",
			isActive: true,
			currentlyWatching: "Avatar",
			imgUrl: pepe,
		},
		{
			id: 2,
			name: "Tom Hanks",
			isActive: true,
			currentlyWatching: "Forest Gump",
			imgUrl: pepe,
		},
		{
			id: 3,
			name: "Travis Gerrit",
			isActive: false,
			currentlyWatching: "Avatar",
			imgUrl: pepe,
		},
		{
			id: 4,
			name: "Leonardo Di Caprio",
			isActive: true,
			currentlyWatching: "Great Gatsby",
			imgUrl: pepe,
		},
		{
			id: 4,
			name: "Selena Gomez",
			isActive: true,
			currentlyWatching: "Avatar",
			imgUrl: pepe,
		},
		{
			id: 5,
			name: "Kanye West",
			isActive: true,
			currentlyWatching: "Baby momma",
			imgUrl: pepe,
		},
		{
			id: 6,
			name: "Pete Davidson",
			isActive: true,
			currentlyWatching: "Movies",
			imgUrl: pepe,
		},
		{
			id: 7,
			name: "Selena Gomez",
			isActive: true,
			currentlyWatching: "Avatar",
			imgUrl: pepe,
		},
		{
			id: 8,
			name: "Kanye West",
			isActive: true,
			currentlyWatching: "Baby momma",
			imgUrl: pepe,
		},
		{
			id: 9,
			name: "Pete Davidson",
			isActive: true,
			currentlyWatching: "Movies",
			imgUrl: pepe,
		},
		{
			id: 10,
			name: "Selena Gomez",
			isActive: true,
			currentlyWatching: "Avatar",
			imgUrl: pepe,
		},
		{
			id: 11,
			name: "Kanye West",
			isActive: true,
			currentlyWatching: "Baby momma",
			imgUrl: pepe,
		},
		{
			id: 12,
			name: "Pete Davidson",
			isActive: true,
			currentlyWatching: "Movies",
			imgUrl: pepe,
		},
	];
	return (
		<div className={styles.container}>
			{TESTUSERS.map((user) => {
				return (
					<div key={user.id} className="user-box">
						<User
							bordered
							src={user.imgUrl}
							name={user.name}
							description={user.isActive ? user.currentlyWatching : ""}
							color={user.isActive ? "success" : "error"}
						/>
					</div>
				);
			})}
		</div>
	);
}
