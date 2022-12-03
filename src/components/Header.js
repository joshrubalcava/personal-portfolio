import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
	faMedium,
	faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { Box, HStack } from "@chakra-ui/react";

const socials = [
	{
		icon: faEnvelope,
		url: "mailto: josh.rubalcava@yahoo.com",
	},
	{
		icon: faGithub,
		url: "https://github.com/joshrubalcava",
	},
	{
		icon: faLinkedin,
		url: "https://www.linkedin.com/in/joshua-rubalcava/",
	},
	{
		icon: faMedium,
		url: "https://medium.com",
	},
	{
		icon: faStackOverflow,
		url: "https://stackoverflow.com",
	},
];

const Header = () => {
	const handleClick = (anchor) => (e) => {
		e.preventDefault();
		const id = `${anchor}-section`;
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<Box
			position="fixed"
			top={0}
			left={0}
			right={0}
			translateY={0}
			transitionProperty="transform"
			transitionDuration=".3s"
			transitionTimingFunction="ease-in-out"
			backgroundColor="#18181b"
		>
			<Box color="white" maxWidth="1280px" margin="0 auto">
				<HStack
					px={16}
					py={4}
					direction="column"
					justifyContent="space-between"
					alignItems="center"
				>
					<nav>
						{socials.map((link, index) => {
							return (
								<a href={link.url} key={index}>
									<FontAwesomeIcon  icon={link.icon} size="2x" style={{paddingRight: 20}}/>
								</a>
							)
						})}
					</nav>
					<nav>
						<HStack spacing={8}>
							<a href="/projects" onClick={handleClick( "projects")}>
								Projects
							</a>
							<a href="/contactme" onClick={handleClick("contactme")}>
								Contact Me
							</a>
						</HStack>
					</nav>
				</HStack>
			</Box>
		</Box>
	);
};
export default Header;