import { useEffect, useState } from "react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import {
	signInWithGooglePopup,
	signOutUser,
	createUserDocumentFromAuth,
} from "../../../utils/firebase.utils";
import { useRouter } from "next/router";
import AvatarDropdown from "../AvatarDropdown";

export default function NavbarComponent() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [activeLink, setActiveLink] = useState("");
	const router = useRouter();
	const activeColor = "error";

	const routes = [{ name: "Home", path: "/home" }];

	const showIn = "md";
	const hideIn = "md";

	useEffect(() => {
		setActiveLink(router.route);
		checkoutAuthenticationStatus();
	}, [router]);

	const checkoutAuthenticationStatus = () => {
		if (localStorage.getItem("userId") === null) {
			return setIsAuthenticated(false);
		}
		return setIsAuthenticated(true);
	};

	const loginHandler = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
		localStorage.setItem("userId", user.uid);
		setIsAuthenticated(true);
	};

	const logoutHandler = () => {
		signOutUser();
		setIsAuthenticated(false);
	};

	if (isAuthenticated) {
		return (
			<>
				<Navbar variant="floating">
					<Navbar.Brand>
						{/* <AcmeLogo /> */}
						<Text b color="inherit" onClick={() => router.replace("/")}>
							Accedo
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
						<AvatarDropdown onLogout={logoutHandler} />
					</Navbar.Content>
				</Navbar>
			</>
		);
	}
	return (
		<>
			<Navbar variant="floating">
				<Navbar.Brand>
					{/* <AcmeLogo /> */}
					<Text b color="inherit" onClick={() => router.replace("/")}>
						Accedo
					</Text>
				</Navbar.Brand>
				<Navbar.Content activeColor={activeColor}>
					<Navbar.Item>
						<Button
							auto
							flat
							as={Link}
							color={activeColor}
							onClick={loginHandler}
						>
							Login
						</Button>
					</Navbar.Item>
				</Navbar.Content>
			</Navbar>
		</>
	);
}
