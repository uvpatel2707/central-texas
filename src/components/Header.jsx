import { Menu } from "@mui/icons-material";
import {
	AppBar,
	Box,
	Container,
	CssBaseline,
	Drawer,
	Hidden,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import React from "react";

const drawerWidth = 240;

const mainNav = [
	{
		name: "Home",
		url: "/",
	},
	{
		name: "About us",
		url: "/about",
	},
	{
		name: "Services",
		url: "/services",
	},
	{
		name: "Contact",
		url: "/contact",
	},
];

function Header(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<List>
				{mainNav.map((item) => (
					<ListItem key={item?.name} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary={item?.name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box>
			<CssBaseline />
			<AppBar
				component='nav'
				sx={{
					background: "#fcfcfb",
					boxShadow: "none",
				}}>
				<Container>
					<Toolbar
						sx={{
							background: "transparent",
							display: "flex",
							justifyContent: "space-between",
							paddingX: "0px !important",
						}}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
							}}>
							<img
								src='/assets/mobileLogo.png'
								style={{
									height: "40px",
									objectFit: "contain",
									marginRight: "12px",
								}}
							/>
							<Typography
								sx={{
									display: { xs: "none", sm: "block" },
									color: "#514432",
									fontFamily: "Gluten",
									fontSize: "20px",
									lineHeight: "17.65px",
									fontWeight: 400,
								}}>
								Central Texas Fly Fishing
							</Typography>
						</Box>
						<Hidden smUp>
							<IconButton
								color='inherit'
								aria-label='open drawer'
								edge='start'
								onClick={handleDrawerToggle}
								sx={{
									color: "#1C1812",
									width: "40px",
									height: "40px",
								}}>
								<img
									alt='menu-icon'
									src='/assets/menuIcons.png'
									style={{ width: "24px", height: "24px" }}
								/>
							</IconButton>
						</Hidden>
						<Stack gap={3} sx={{ display: { xs: "none", sm: "flex" }, flexDirection: "row" }}>
							{mainNav.map((item, index) => (
								<Box
									key={index}
									sx={{
										border: 0,
										borderBottomWidth: index === 0 ? "2px" : 0,
										borderColor: "#1C1812",
										borderStyle: "solid",
									}}>
									<Typography key={item?.name} sx={{ color: "#1C1812" }}>
										{item?.name}
									</Typography>
								</Box>
							))}
						</Stack>
					</Toolbar>
				</Container>
			</AppBar>
			<nav>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
					}}>
					{drawer}
				</Drawer>
			</nav>
			<Toolbar />
		</Box>
	);
}

export default Header;
