import { User } from "@nextui-org/react";
import styles from "./FriendsList.module.scss";

export default function FriendsList() {

	const TESTUSERS = [
		{
			id: 2,
			name: "Ajanth Uthayan",
			isActive: true,
			currentlyWatching: "Forest Gump",
			imgUrl: 'https://avatars.githubusercontent.com/u/69360970?v=4',
		},
		{
			id: 1,
			name: "Aiden Jolley-Ruhn",
			isActive: true,
			currentlyWatching: "Avatar, The Last Airbender",
			imgUrl: 'https://avatars.githubusercontent.com/u/72046405?s=400&u=4908bda617d7aba41cb0ab630a3f40c45058cb74&v=4',
		},
		{
			id: 3,
			name: "Travis Gerrit",
			isActive: false,
			currentlyWatching: "8 Mile",
			imgUrl: 'https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg',
		},
		
		{
			id: 4,
			name: "Selena Gomez",
			isActive: true,
			currentlyWatching: "Wizards of Waverly Place",
			imgUrl: 'https://m.media-amazon.com/images/M/MV5BMjAwNTE2MDMyMl5BMl5BanBnXkFtZTgwMjAyODM3MTI@._V1_.jpg',
		},
		{
			id: 4,
			name: "Leonardo Di Caprio",
			isActive: false,
			currentlyWatching: "Great Gatsby",
			imgUrl: 'https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_.jpg',
		},
		{
			id: 5,
			name: "Kanye West",
			isActive: true,
			currentlyWatching: "Keeping up with the Kardashians",
			imgUrl: 'https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/0x0.jpg?format=jpg&crop=4666,4663,x154,y651,safe&height=416&width=416&fit=bounds',
		},
		{
			id: 6,
			name: "Pete Davidson",
			isActive: true,
			currentlyWatching: "Sausage Party",
			imgUrl: 'https://resizing.flixster.com/mlfyjGr_m_1M2mY4rP5wM5qxVY0=/218x280/v2/https://flxt.tmsimg.com/assets/774711_v9_bb.jpg',
		},
		
		{
			id: 7,
			name: "Dwayne Johnson",
			isActive: true,
			currentlyWatching: "Moana",
			imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg',
		},
		{
			id: 8,
			name: "Samuel L. Jackson",
			isActive: true,
			currentlyWatching: "Pulp Fiction",
			imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Samuel_L._Jackson_2019_by_Glenn_Francis.jpg/1200px-Samuel_L._Jackson_2019_by_Glenn_Francis.jpg',
		},
		{
			id: 9,
			name: "Johnny Depp",
			isActive: true,
			currentlyWatching: "Pirates of the Caribbean",
			imgUrl: 'https://nationaltoday.com/wp-content/uploads/2022/05/107-Johnny-Depp.jpg',
		},
		{
			id: 10,
			name: "Denzel Washington",
			isActive: true,
			currentlyWatching: "The Office",
			imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Denzel_Washington_%2829479254650%29_%28cropped%29.jpg/640px-Denzel_Washington_%2829479254650%29_%28cropped%29.jpg',
		},
		{
			id: 11,
			name: "Tom Cruise",
			isActive: true,
			currentlyWatching: "Top Gun",
			imgUrl: 'https://m.media-amazon.com/images/M/MV5BYTFlOTdjMjgtNmY0ZC00MDgxLThjNmEtZGIxZTQyZDdkMTRjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY264_CR9,0,178,264_AL_.jpg',
		},
		{
			id: 12,
			name: "Bruce Willis",
			isActive: true,
			currentlyWatching: "Die Hard",
			imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Bruce_Willis_by_Gage_Skidmore_3.jpg',
		},
		{
			id: 13,
			name: "Danny Devito",
			isActive: true,
			currentlyWatching: "Always Sunny In Philadelphia",
			imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg',
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
