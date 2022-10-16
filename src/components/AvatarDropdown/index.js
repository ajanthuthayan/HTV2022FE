import { Dropdown, Avatar, Text, Grid, User } from "@nextui-org/react";

export default function AvatarDropdown({ image, name, onLogout }) {
	const test = () => {
		console.log(true);
	};

	const color = "warning";
	return (
		<Grid.Container justify="flex-start" gap={2}>
			<Grid>
				<Dropdown placement="bottom-left">
					<Dropdown.Trigger>
						<User
							as="button"
							size="lg"
							name="First Last"
							description="@firstLast"
							src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
						/>
					</Dropdown.Trigger>
					<Dropdown.Menu color={color} aria-label="User Actions">
						<Dropdown.Item key="profile" css={{ height: "$18" }}>
							<Text b color="inherit" css={{ d: "flex" }}>
								Signed in as
							</Text>
							<Text b color="inherit" css={{ d: "flex" }}>
								demo@example.com
							</Text>
						</Dropdown.Item>
						<Dropdown.Item key="purchases" withDivider>
							Purchases
						</Dropdown.Item>
						<Dropdown.Item key="settings">Settings</Dropdown.Item>
						<Dropdown.Item key="logout" withDivider color="none">
							<Text weight="medium" color={color} onClick={onLogout}>
								Logout
							</Text>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Grid>
		</Grid.Container>
	);
}
