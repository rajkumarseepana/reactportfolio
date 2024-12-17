import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Button, Image, useColorModeValue } from "@chakra-ui/react";
import "./cssfiles/certificates.css";

// Import images at the top
import fdImage from "../images/fdintro.png";
import react from "../images/reactadvance.png";
import python from "../images/python.png";
import tcs from "../images/tcs.png";


const certificatesData = [
  { id: 1, title: "Frontend Development", image: fdImage },
  { id: 2, title: "React", image: react },
  { id: 3, title: "Python Programming", image: python },
  { id: 4, title: "TCS iON Career Edge", image: tcs },
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [scrollVisible, setScrollVisible] = useState(false);

  // Handle scroll animation trigger
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollVisible(scrollPosition > 200); // Change animation trigger point
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const boxBg = useColorModeValue("gray.100", "gray.700");
  const activeBg = useColorModeValue("teal.100", "teal.600");
  const textColor = useColorModeValue("black", "white");

  return (
    <Flex id="certificates-section" className="certificates-container">
      {/* Left Section */}
      <Box
        className={`left-panel ${scrollVisible ? "slide-in" : ""}`}
        bg={boxBg}
        p="4"
        borderRadius="lg"
        boxShadow="lg"
      >
        <Text fontSize="3xl" mb="4" fontWeight="bold" color={textColor}>
          My Certificates
        </Text>
        {certificatesData.map((cert) => (
          <Box
            key={cert.id}
            className="certificate-item"
            p="1"
            mb="3"
            borderRadius="md"
            bg={selectedCertificate === cert.id ? activeBg : "transparent"}
            cursor="pointer"
            _hover={{ bg: activeBg }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontSize="xl" fontWeight="medium" color={textColor}>
              {cert.title}
            </Text>
            {/* Hide View button on small screens */}
            <Button
              size="sm"
              colorScheme="teal"
              onClick={() => setSelectedCertificate(cert.id)}
              display={{ base: "none", md: "inline" }} // Hide button on small screens
            >
              View
            </Button>
          </Box>
        ))}
      </Box>

      {/* Right Section */}
      <Box
        className={`right-panel ${selectedCertificate ? "show" : ""}`}
        bg={boxBg}
        p="4"
        borderRadius="lg"
        boxShadow="lg"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {selectedCertificate ? (
          <Image
            src={certificatesData.find((cert) => cert.id === selectedCertificate).image}
            alt="Certificate"
            borderRadius="md"
            boxShadow="lg"
            maxH="70vh"
            objectFit="contain"
          />
        ) : (
          <Text fontSize="lg" color={textColor} textAlign="center">
            Click a certificate on the left to view details here.
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default Certificates;
