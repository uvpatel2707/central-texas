import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

function HeroSection(props) {
	return (
		<Box>
			<Container
				sx={{
					minHeight: { xs: "100%", sm: "466px" },
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					paddingX: { xs: "0px !important", sm: "24px !important" },
				}}>
				<Stack
					columnGap={2}
					sx={{
						display: "flex",
						flexDirection: { xs: "column-reverse", sm: "row" },
						alignItems: "center",
					}}>
					<Stack
						rowGap={1}
						sx={{
							maxWidth: "566px",
							paddingY: { xs: "40px", md: 0 },
							paddingX: { xs: "24px", sm: 0 },
						}}>
						<Typography
							sx={{
								fontSize: { xs: "40px", md: "56px" },
								lineHeight: { xs: "45px", md: "63px" },
								fontWeight: 600,
								color: "#1C1812",
							}}>
							Central Texas <br /> Fly Fishing
						</Typography>
						<Typography
							sx={{
								fontSize: "20px",
								lineHeight: "30px",
								fontWeight: 400,
								color: "#65625E",
							}}>
							At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi
							ac, sed faucibus.
						</Typography>
						<Button
							sx={{
								width: "fit-content",
								paddingX: "12px",
								paddingY: "8px",
								borderRadius: "4px",
								bgcolor: "#514432",
								color: "#F7F7F6",
								boxShadow: "none",
								textTransform: "none",
							}}>
							Get Started
						</Button>
					</Stack>
					<Box
						sx={{
							position: "relative",
							width: { xs: "100%", sm: "400px" },
						}}>
						<img
							src='/assets/hero.png'
							alt='hero-section'
							style={{
								width: "100%",
								height: "100%",
								aspectRatio: "4/3",
							}}
						/>
					</Box>
				</Stack>
			</Container>
		</Box>
	);
}

export default HeroSection;
