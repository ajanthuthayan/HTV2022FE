import { User } from "@nextui-org/react";
import styles from "./FriendsList.module.scss";
import { TESTUSERS } from "../../constants/constants";
export default function FriendsList() {

	
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
