import React from "react";
import { Avatar, Heading, Button, VStack, HStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Typewriter } from "react-simple-typewriter";
import rajAvatar from "../images/raj.jpg";
import "./cssfiles/landingsection.css";

const greeting = "Hello, I am Raj!";

const socials = [
  { icon: faEnvelope, url: "mailto:rajkumarseepana895@gmail.com", label: "Email" },
  { icon: faGithub, url: "https://github.com/rajkumarseepana", label: "GitHub" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/raj-kumar-seepana/", label: "LinkedIn" },
  { icon: faInstagram, url: "https://www.instagram.com/_end.eavour/", label: "Instagram" },
  { icon: faWhatsapp, url: "https://wa.me/+919705422531", label: "WhatsApp" },
];

const LandingSection = () => (
  <section className="landing-section">
    <div className="content-container">
      {/* Left Section */}
      <div className="content-left">
        <VStack align="flex-start" spacing={5}>
          <HStack spacing={7} className="social-icons">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                isExternal
                aria-label={social.label}
                className="social-link"
              >
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </Link>
            ))}
          </HStack>
          <Heading as="h1" className="greeting">{greeting}</Heading>
          <Heading as="h2" className="typewriter">
            <Typewriter
              words={["A Frontend Developer", "Specialized in React"]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </Heading>
          <Button as="a" href="/rajkumarseepana.pdf" download="Raj_Resume.pdf" className="resume-button">
            Download Resume
          </Button>
        </VStack>
      </div>

      {/* Right Section */}
      <div className="content-right">
        <Avatar
          src={rajAvatar}
          className="avatar animated-avatar"
        />
      </div>
    </div>
  </section>
);

export default LandingSection;
