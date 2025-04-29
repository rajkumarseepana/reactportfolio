import React from "react";
import { ChakraProvider, Box, useColorModeValue } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates.js"; 
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import Experience from "./components/Experience";

function App() {
  // Dynamically set background and text color based on theme
  const backgroundColor = useColorModeValue("#f0f0f0", "#18181b");
  const textColor = useColorModeValue("black", "white");

  return (
    <ChakraProvider>
      <AlertProvider>
        <Box
          backgroundColor={backgroundColor} 
          color={textColor} // Dynamic text color
          minHeight="100vh"
          transition="background-color 0.3s ease" // Smooth theme transition
        >
          <main>
            <Header />
            <LandingSection />
            <Experience />
            <ProjectsSection />
            <Certificates /> 
            <ContactMeSection />
            <Footer />
            <Alert />
          </main>
        </Box>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
