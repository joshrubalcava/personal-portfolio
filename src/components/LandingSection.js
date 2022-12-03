import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

const stylingBio = {
	bio: {
		fontSize: 50
	}
}

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
	<FullScreenSection
		justifyContent="center"
		alignItems="center"
		isDarkBackground
		backgroundColor="#2A4365"
	>
		<img src="https://i.pravatar.cc/150?img=7" alt="avatar-image"></img>
		<h1>{greeting}</h1>
		<h1 style={stylingBio.bio}>{bio1}</h1>
		<h1 style={stylingBio.bio}>{bio2}</h1>
	</FullScreenSection>
);

export default LandingSection;