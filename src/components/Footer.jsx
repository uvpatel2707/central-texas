import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

function Footer(props) {
	const footerNav = [
		{
			name: "FAQ",
			url: "/faq",
		},
		{
			name: "Privacy",
			url: "/privacy",
		},
		{
			name: "Support",
			url: "/support",
		},
		{
			name: "Contact",
			url: "/contact",
		},
	];

	return (
		<Box
			sx={{
				bgcolor: "#1C1812",
			}}>
			<Container
				sx={{
					paddingY: "24px",
				}}>
				<Stack
					sx={{
						display: "flex",
						flexDirection: { xs: "column", sm: "row" },
						justifyContent: { xs: "center", sm: "space-between" },
						alignItems: "center",
					}}>
					<Stack
						gap={2}
						sx={{
							display: "flex",
							flexDirection: { xs: "column", sm: "row" },
							alignItems: "center",
						}}>
						<Box
							sx={{
								height: "40px",
							}}>
							<img
								src='/assets/logo-fly.png'
								alt='central-texas'
								style={{
									width: "100%",
									height: "100%",
									objectFit: "contain",
								}}
							/>
						</Box>
						<Stack
							columnGap={2}
							sx={{
								display: "flex",
								flexDirection: "row",
							}}>
							{footerNav?.map((item, index) => {
								return (
									<Typography
										key={index}
										sx={{
											fontSize: "16px",
											lineHeight: "24px",
											color: "#F7F7F6",
										}}>
										{item?.name}
									</Typography>
								);
							})}
						</Stack>
					</Stack>
					<Stack sx={{ display: "flex", flexDirection: "row" }}>
						<IconButton
							sx={{
								borderRadius: "4px",
								width: "40px",
								height: "40px",
							}}>
							<img
								src='/assets/facebookFooter.png'
								alt='Linked In'
								style={{
									width: "24px",
									height: "24px",
								}}
							/>
						</IconButton>
						<IconButton
							sx={{
								borderRadius: "4px",
								width: "40px",
								height: "40px",
							}}>
							<img
								src='/assets/instaFooter.png'
								alt='Linked In'
								style={{
									width: "24px",
									height: "24px",
								}}
							/>
						</IconButton>
						<IconButton
							sx={{
								borderRadius: "4px",
								width: "40px",
								height: "40px",
							}}>
							<img
								src='/assets/linkedInFooter.png'
								alt='Linked In'
								style={{
									width: "24px",
									height: "24px",
								}}
							/>
						</IconButton>
					</Stack>
				</Stack>
				<Typography
					sx={{
						fontSize: "12px",
						fontWeight: 400,
						lineHeight: "18px",
						color: "#AEADAA",
						textAlign: "center",
						mt: { xs: 2, sm: 4 },
					}}>
					© 2024 Central Texas Fly Fishing All Rights Reserved.
				</Typography>
			</Container>
		</Box>
	);
}

export default Footer;
