import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, SimpleGrid, useColorMode } from "@chakra-ui/react";
import Card from "./Card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Built with HTML, CSS and JavaScript, featuring a responsive layout. 🌐💻",
    gitLink: "https://github.com/rajkumarseepana/resume-project",
    liveLink: "https://rajkumarseepana.github.io/resume-project/",
    getImageSrc: () => require("../images/photo1.png"),
  },
  {
    title: "Weather Detector Web Application",
    description:
      "Developed a web app that fetches and displays real-time weather data based on user input. 🌤️🌍",
    gitLink: "https://github.com/rajkumarseepana/WeatherDetector",
    liveLink: "https://rajkumarseepana.github.io/WeatherDetector/",
    getImageSrc: () => require("../images/photo2.png"),
  },
  {
    title: "React Calculator",
    description:
      `Performs basic arithmetic operations and 
      features a user-friendly interface with real-time 
      result updates and input reset functionality. ➗🧮`,
    gitLink: "https://github.com/rajkumarseepana/react-calculator",
    liveLink: "https://rajkumarseepana.github.io/react-calculator/",
    getImageSrc: () => require("../images/photo3.png"),
  },
];

const ProjectsSection = () => {
  const { colorMode } = useColorMode(); // Access light/dark mode

  return (
    <motion.div id="projects-section">
      <FullScreenSection
        backgroundColor="#2a4365" // Fixed webpage background color
        p={8}
        alignItems="flex-start"
        spacing={8}
      >
        <Heading as="h1" color="white" mb={6}>
          Featured Projects
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }} // Responsive grid
          spacing={8}
          w="100%"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              whileInView={{ opacity: 1, y: 0 }} // Fade in animation
              initial={{ opacity: 0, y: 50 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2, // Stagger animation
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card
                title={project.title}
                description={project.description}
                imageSrc={project.getImageSrc()}
                gitLink={project.gitLink} // Pass GitHub link
                liveLink={project.liveLink} // Pass Live link
                colorMode={colorMode} // Pass color mode to Card
              />
            </motion.div>
          ))}
        </SimpleGrid>
      </FullScreenSection>
    </motion.div>
  );
};

export default ProjectsSection;
