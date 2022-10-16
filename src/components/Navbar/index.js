import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import AvatarDropdown from "../AvatarDropdown";
import { BiSearch } from "react-icons/bi";
import SearchBar from "../SearchBar";

export default function NavbarComponent({
	isAuthenticated,
	onLogout,
	onLogin,
}) {
	const [activeLink, setActiveLink] = useState("");

	const router = useRouter();
	const routes = [{ name: "Home", path: "/home" }];

	const activeColor = "warning";
	const showIn = "md";
	const hideIn = "md";

	useEffect(() => {
		setActiveLink(router.route);
	}, [router]);

	if (isAuthenticated) {
		return (
			<div className={styles.container}>
				<Navbar variant="static">
					<Navbar.Brand>
						<Text h2 color="inherit" onClick={() => router.replace("/")}>
							CineTrak
						</Text>
					</Navbar.Brand>
					<Navbar.Content
						activeColor={activeColor}
						hideIn={hideIn}
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						{/* <SearchBar /> */}
						<BiSearch size="32px" style={{ cursor: "pointer" }} />
						<AvatarDropdown onLogout={onLogout} />
					</Navbar.Content>
				</Navbar>
			</div>
		);
	}
	return (
		<div className={styles.container}>
			<Navbar variant="floating">
				<Navbar.Brand>
					<Text h2 color="inherit" onClick={() => router.replace("/")}>
						CineTrak
					</Text>
				</Navbar.Brand>
				<Navbar.Content activeColor={activeColor}>
					<Navbar.Item>
						<Button auto flat as={Link} color={activeColor} onClick={onLogin}>
							Login
						</Button>
					</Navbar.Item>
				</Navbar.Content>
			</Navbar>
		</div>
	);
}
