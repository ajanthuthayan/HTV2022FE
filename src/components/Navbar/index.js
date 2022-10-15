import { useEffect, useState } from "react";
import {
	Navbar,
	Button,
	Link,
	Text,
	Avatar,
	Dropdown,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import AvatarDropdown from "../AvatarDropdown";
import SearchBar from "../SearchBar/SearchBar";

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
	}, [router]);

	const loginHandler = () => {
		setIsAuthenticated(true);
	};

	const logoutHandler = () => {
		setIsAuthenticated(false);
	};

	if (isAuthenticated) {
		return (
			<div
				style={{
					boxSizing: "border-box",
					maxWidth: "100%",
				}}
			>
				<Navbar variant="floating">
					<Navbar.Brand>
						<Navbar.Toggle aria-label="toggle navigation" showIn={showIn} />
						{/* <AcmeLogo /> */}
						<Text b color="inherit" onClick={() => router.replace("/")}>
							Accedo
						</Text>
					</Navbar.Brand>
					<SearchBar />
					<Navbar.Content
						activeColor={activeColor}
						hideIn={hideIn}
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						{/* {routes.map((route, index) => {
							return (
								<Navbar.Link
									key={index}
									href={route.path}
									isActive={route.path === router.route ? true : false}
								>
									{route.name}
								</Navbar.Link>
							);
						})} */}
						<AvatarDropdown onLogout={logoutHandler} />
					</Navbar.Content>

					<Navbar.Collapse showIn={showIn}>
						{routes.map((route, index) => (
							<Navbar.CollapseItem key={index}>
								<Link
									color="inherit"
									style={{ minWidth: "100%" }}
									href={route.path}
								>
									{route.name}
								</Link>
							</Navbar.CollapseItem>
						))}
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
	return (
		<div
			style={{
				boxSizing: "border-box",
				maxWidth: "100%",
			}}
		>
			<Navbar variant="floating">
				<Navbar.Brand>
					<Navbar.Toggle aria-label="toggle navigation" showIn={showIn} />
					{/* <AcmeLogo /> */}
					<Text b color="inherit" onClick={() => router.replace("/")}>
						Accedo
					</Text>
				</Navbar.Brand>
				<SearchBar />
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
		</div>
	);
}
