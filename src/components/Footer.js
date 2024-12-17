import React from "react";
import { Box, Flex, useColorMode } from "@chakra-ui/react";

const Footer = () => {
  const { colorMode } = useColorMode(); // Hook to get the current color mode
  
  return (
    <Box backgroundColor={colorMode === "light" ? "#f7fafc" : "#18181b"}> 
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color={colorMode === "light" ? "black" : "white"} // Change text color based on the theme
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Raj Kumar Seepana © 2024</p>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
