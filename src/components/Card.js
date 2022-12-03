import { Heading, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
	return (
		<VStack>
			<Box bg="whitesmoke" maxW="xl" borderRadius='lg' overflow='hidden'>
				<Image src={imageSrc} alt="preview-image" width="1024" borderRadius="lg"></Image>
				<Box p="4">
					<Box display="flex" flexDirection="column" pt="2">
						<Heading color="black" size="md" pb="3">{title}</Heading>
						<Text color="blackAlpha.600">{description}</Text>
						<Text color="blackAlpha.900" pt="3">
							See More <FontAwesomeIcon icon={faArrowRight} size="1x" />
						</Text>
					</Box>
				</Box>
			</Box>

		</VStack>
	)
};

export default Card;