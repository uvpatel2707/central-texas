import { Box, Button, Container, Grid, Hidden, Stack, Typography } from "@mui/material";
import React from "react";

const stories = [
	{
		title: "John's Story",
		image: "/assets/JohnStory.png",
		description:
			"Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh",
	},
	{
		title: "The Journey",
		image: "/assets/theJourny.png",
		description:
			"Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
	},
	{
		title: "Catch Day",
		image: "/assets/catchDay.png",
		description:
			"Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
	},
	{
		title: "Trout Tales",
		image: "/assets/tales.png",
		description:
			"Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed",
	},
];

function StorySection(props) {
	return (
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
					marginBottom: 3,
				}}>
				Member stories
			</Typography>
			<Hidden smDown>
				<Grid container spacing={4}>
					{stories.map((story, index) => (
						<Grid
							item
							xs={12}
							sm={6}
							key={index}
							sx={{
								display: "flex",
								flexDirection: "row",
							}}>
							<img
								alt={story?.title}
								src={story?.image}
								style={{
									width: "200px",
									height: "200px",
								}}
							/>
							<Box
								sx={{
									marginLeft: 2,
								}}>
								<Typography
									sx={{
										color: "#1C1812",
										fontSize: "32px",
										lineHeight: "48px",
										fontWeight: 400,
										fontFamily: "Gluten",
									}}>
									{story.title}
								</Typography>

								<Typography
									sx={{
										color: "#65625E",
										fontSize: "14px",
										lineHeight: "21px",
										fontWeight: 400,
										marginY: "8px",
									}}>
									{story.description}
								</Typography>
								<Button
									variant='contained'
									sx={{
										textTransform: "none",
										color: "#1C1812",
										bgcolor: "#DFDEDD",
										paddingX: "8px",
										paddingY: "4px",
										borderRadius: "4px",
										boxShadow: "none",
									}}>
									Read More
								</Button>
							</Box>
						</Grid>
					))}
				</Grid>
			</Hidden>
			<Hidden smUp>
				<Stack>
					{stories?.map((story, index) => (
						<Box
							sx={{
								paddingY: "24px",
								border: 0,
								borderTopWidth: index === 0 ? "1px" : 0,
								borderBottomWidth: "1px",
								borderColor: "#C6C5C3",
								borderStyle: "solid",
							}}>
							<Typography
								sx={{
									color: "#1C1812",
									fontSize: "32px",
									lineHeight: "48px",
									fontWeight: 400,
									fontFamily: "Gluten",
								}}>
								{story.title}
							</Typography>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									marginBottom: 2,
									marginTop: "4px",
								}}>
								<img
									alt={story?.title}
									src={story?.image}
									style={{
										width: "100px",
										height: "100px",
									}}
								/>
								<Typography
									sx={{
										color: "#65625E",
										fontSize: "14px",
										lineHeight: "21px",
										fontWeight: 400,
										marginLeft: "16px",
									}}>
									{story.description}
								</Typography>
							</Box>
							<Button
								variant='outlined'
								sx={{
									textTransform: "none",
									color: "#1C1812",
									paddingX: "8px",
									paddingY: "4px",
									borderRadius: "4px",
									boxShadow: "none",
									borderColor: "#969491",
								}}>
								Read More
							</Button>
						</Box>
					))}
				</Stack>
			</Hidden>
		</Container>
	);
}

export default StorySection;
