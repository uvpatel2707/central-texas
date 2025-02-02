import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Container,
	Grid,
	Hidden,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import { ExpandMore } from "@mui/icons-material";

const options = [
	{
		image: "/assets/exploreFly.jpg",
		title: "Explore Fly Fishing",
		content: "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien.",
	},
	{
		image: "/assets/flyFishing.jpg",
		title: "Fly Fishing Experiences",
		content: "Elit pellentesque habitant morbi tristique senectus et netus.",
	},
	{
		image: "/assets/catchMore.jpg",
		title: "Gear Up and Catch More",
		content: "In metus vulputate eu scelerisque felis imperdiet.",
	},
];

function FeatureSection(props) {
	const [expanded, setExpanded] = React.useState(0);

	const handleChange = (index) => (_, isExpanded) => {
		setExpanded(isExpanded ? index : null);
	};

	return (
		<Box
			sx={{
				bgcolor: "#F1ECE1",
			}}>
			<Container
				sx={{
					paddingY: "40px",
				}}>
				<Typography
					sx={{
						fontSize: { xs: "40px", md: "48px" },
						lineHeight: { xs: "45px", md: "58px" },
						color: "#1C1812",
						fontWeight: 600,
						marginBottom: 2,
					}}>
					Featured options
				</Typography>
				<Hidden smDown>
					{options.map((option, index) => (
						<Accordion
							key={index}
							expanded={expanded === index}
							onChange={handleChange(index)}
							sx={{
								boxShadow: "none",
								background: "transparent",
								// borderBottom: "1px solid #969491", // Custom separator line color (Change this value)
								// "&:last-of-type": { borderBottom: "none" }, // Removes border for the last accordion
							}}>
							<AccordionSummary
								expandIcon={<ExpandMore />}
								sx={{
									borderBottom: 0,
								}}>
								<Typography variant='h6'>{option.title}</Typography>
							</AccordionSummary>
							<AccordionDetails
								sx={{
									padding: 0,
									border: 0,
									borderTopWidth: "1px",
									borderColor: "#969491",
									borderStyle: "solid",
									display: "flex",
									flexDirection: "row",
								}}>
								<Box
									sx={{
										minWidth: "400px",
										width: "400px",
									}}>
									<img
										src={option?.image}
										alt={option?.title}
										style={{
											width: "100%",
											height: "100%",
										}}
									/>
								</Box>
								<Box
									sx={{
										padding: "24px",
									}}>
									<Typography
										sx={{
											fontSize: "32px",
											lineHeight: "36px",
											fontWeight: 600,
											color: "#1C1812",
										}}>
										{option.title}
									</Typography>
									<Typography
										sx={{
											fontSize: "20px",
											lineHeight: "30px",
											fontWeight: 400,
											color: "#65625E",
											marginY: "8px",
										}}>
										{option.content}
									</Typography>
									<Button
										variant='contained'
										sx={{
											color: "#1C1812",
											bgcolor: "#DFDEDD",
											paddingY: "4px",
											paddingX: "8px",
											boxShadow: "none",
											textTransform: "none",
										}}>
										Learn More
									</Button>
								</Box>
							</AccordionDetails>
						</Accordion>
					))}
				</Hidden>
				<Hidden smUp>
					<Stack contaier xs={12} spacing={3}>
						{options?.map((option, index) => {
							return (
								<Box
									key={index}
									sx={{
										position: "relative",
										padding: "24px",
										bgcolor: "rgba(255, 255, 255, 1)", // Light background
									}}>
									<Box
										sx={{
											position: "absolute",
											top: 0,
											left: 0,
											width: "100%",
											height: "100%",
											backgroundImage: `url(${option.image})`,
											backgroundSize: "cover",
											backgroundPosition: "center",
											opacity: 0.25,
											zIndex: 0,
										}}
									/>
									<Box
										sx={{
											zIndex: 1,
										}}>
										<Typography
											sx={{
												fontSize: "32px",
												lineHeight: "36px",
												fontWeight: 600,
												color: "#1C1812",
											}}>
											{option.title}
										</Typography>
										<Typography
											sx={{
												fontSize: "20px",
												lineHeight: "30px",
												fontWeight: 400,
												color: "#65625E",
												marginY: "8px",
											}}>
											{option.content}
										</Typography>
										<Button
											variant='contained'
											sx={{
												color: "#1C1812",
												bgcolor: "#DFDEDD",
												paddingY: "4px",
												paddingX: "8px",
												boxShadow: "none",
												textTransform: "none",
											}}>
											Learn More
										</Button>
									</Box>
								</Box>
							);
						})}
					</Stack>
				</Hidden>
			</Container>
		</Box>
	);
}

export default FeatureSection;
