import { useEffect, useState } from "react";
import Select from "react-select";
import { getUserInformation } from "../../../utils/firebase.utils";
import { TESTUSERS } from "../../constants/constants";
import styles from './SearchBar.module.scss';

export default function SearchBar() {
	const [users, setUsers] = useState([]);

	const customStyles = {
		option: (provided) => ({
			...provided,
			color: "black",
		}),
		menu: styles => ({ ...styles, zIndex: 999 }),
	};
	// For getting the firebase users to add to options
	// useEffect(() => {
	// 	const getUserInfo = async () => {
	// 		var currentUsers = [];
	// 		const res = await getUserInformation();
	// 		res.map((account) => {
	// 			currentUsers.push({
	// 				value: account.displayName,
	// 				label: account.displayName,
	// 				isDisabled: false,
	// 			});
	// 		});

	// 		setUsers(currentUsers);
	// 	};

	// 	getUserInfo();
	// }, []);

	useEffect(() => {
		var currentUsers = []
		TESTUSERS.map((tstUser) => {
			currentUsers.push({
				value: tstUser.name,
				label: tstUser.name,
			})
		})
		setUsers(currentUsers);
	},[])

	const getSelected = (option) => {
		// Do something with the selected option
		console.log(option);
	};

	return (
		<div
		style={{
			width:'100%'
		}}
		>
			<Select
				className="my-react-select-container"
				classNamePrefix="my-react-select"
				options={users}
				styles={{...customStyles, ...styles}}
				placeholder="Search"
				onChange={(option) => getSelected(option.value)}
			/>
		</div>
	);
}
