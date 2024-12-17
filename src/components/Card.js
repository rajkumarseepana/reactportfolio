import React from "react";
import { Box, VStack, Image, Heading, Text, HStack, Button, Link } from "@chakra-ui/react";

const Card = ({ title, description, imageSrc, gitLink, liveLink, colorMode }) => {
  const bg = colorMode === "light" ? "white" : "#2D3748"; // Card background color based on theme
  const color = colorMode === "light" ? "gray.800" : "white"; // Text color based on theme

  return (
    <Box
      borderWidth={1}
      borderRadius="md"
      overflow="hidden"
      boxShadow="lg"
      bg={bg}
      color={color}
      _hover={{
        boxShadow: "xl",
        transform: "scale(1.05)",
        transition: "all 0.3s ease",
      }}
      height="100%" // Ensures all cards have the same height
    >
      {/* Image Section */}
      <Image
        src={imageSrc}
        alt={title}
        objectFit="cover"
        height="200px"
        width="100%"
      />

      {/* Card Content */}
      <VStack align="start" p={4} spacing={3} h="calc(100% - 200px)">
        <Heading as="h3" size="lg">
          {title}
        </Heading>
        <Text>{description}</Text>

        {/* Buttons Section */}
        <HStack justify="space-between" width="100%" mt="auto">
          <Box flex="1" mr={2}>
            <Link href={gitLink} isExternal>
              <Button colorScheme="teal" variant="outline" width="100%">
                GitHub
              </Button>
            </Link>
          </Box>
          <Box flex="1" ml={2}>
            <Link href={liveLink} isExternal>
              <Button colorScheme="blue" variant="solid" width="100%">
                Live
              </Button>
            </Link>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
