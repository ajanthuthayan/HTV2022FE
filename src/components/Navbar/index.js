import { useEffect, useState } from "react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import AvatarDropdown from "../AvatarDropdown";
export default function NavbarComponent({
	isAuthenticated,
	onLogout,
	onLogin,
}) {
	const [activeLink, setActiveLink] = useState("");

	const router = useRouter();
	const routes = [{ name: "Home", path: "/home" }];

	const activeColor = "error";
	const showIn = "md";
	const hideIn = "md";

	useEffect(() => {
		setActiveLink(router.route);
	}, [router]);

	if (isAuthenticated) {
		return (
			<>
				<Navbar variant="floating">
					<Navbar.Brand>
						<Text b color="inherit" onClick={() => router.replace("/")}>
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
						<AvatarDropdown onLogout={onLogout} />
					</Navbar.Content>
				</Navbar>
			</>
		);
	}
	return (
		<>
			<Navbar variant="floating">
				<Navbar.Brand>
					<Text b color="inherit" onClick={() => router.replace("/")}>
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
		</>
	);
}
