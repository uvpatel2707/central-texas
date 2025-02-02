import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./components/HeroSection";
import StorySection from "./components/StorySection";
import FeatureSection from "./components/FeatureSection";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<HeroSection />
			<FeatureSection />
			<StorySection />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
