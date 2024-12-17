import React, { useState, useEffect } from "react";
import {
  Box,
  HStack,
  VStack,
  IconButton,
  Button,
  Link,
  Image,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../images/logo1.png";
import "./cssfiles/header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setShowHeader(false); // Hide header on scroll down
    } else {
      setShowHeader(true); // Show header on scroll up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    // Dynamically update CSS variables based on color mode
    if (colorMode === "dark") {
      document.documentElement.style.setProperty('--mobile-menu-bg', '#333');  // Dark background
      document.documentElement.style.setProperty('--mobile-menu-color', '#fff');  // White text
    } else {
      document.documentElement.style.setProperty('--mobile-menu-bg', '#fff');  // Light background
      document.documentElement.style.setProperty('--mobile-menu-color', '#000');  // Black text
    }
  }, [colorMode]);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setShowMenu(false); // Close menu after navigating
    }
  };

  // Set dynamic link color based on color mode
  const linkColor = colorMode === "dark" ? "white" : "black";

  return (
    <header
      className={`header ${showHeader ? "visible" : "hidden"}`}
      style={{
        backgroundColor: colorMode === "dark" ? "black" : "#FFFFFF",
      }}
    >
      <div className="container">
        {/* Logo */}
        <Link href="/" className="logo-link">
          <Image src={logo} alt="Logo" className="logo" />
        </Link>

        {/* Desktop Navigation (Visible only on large screens) */}
        {!isMobile && (
          <HStack className="desktop-nav">
            <Link
              href="#projects-section"
              onClick={handleClick("projects")}
              style={{ color: linkColor }}
            >
              Projects
            </Link>
            <Link
              href="#certificates-section" // This links to the Certificates section
              onClick={handleClick("certificates-section")}
              style={{ color: linkColor }}
            >
              Certificates
            </Link>
            <Link
              href="#contactmesection"
              onClick={handleClick("contactmesection")}
              style={{ color: linkColor }}
            >
              Contact Me
            </Link>
            <Button
              size="sm"
              onClick={toggleColorMode}
              className="theme-toggle"
            >
              {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
            </Button>
          </HStack>
        )}

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <HStack justifyContent="flex-end" width="100%">
            <Button
              size="xs"
              onClick={toggleColorMode}
              className="theme-toggle"
            >
              {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
            </Button>

            <IconButton
              icon={showMenu ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Toggle menu"
              variant="outline"
              onClick={handleMenuToggle}
              className="hamburger-menu"
            />
          </HStack>
        )}

        {/* Mobile Dropdown Menu */}
        {isMobile && showMenu && (
          <VStack className="mobile-menu">
            <Link
              href="#projects-section"
              onClick={handleClick("projects")}
              style={{ color: linkColor }}
            >
              Projects
            </Link>
            <Link
              href="#certificates-section" // This links to the Certificates section
              onClick={handleClick("Certificates")}
              style={{ color: linkColor }}
            >
              Certificates
            </Link>
            <Link
              href="#contactmesection"
              onClick={handleClick("contactmesection")}
              style={{ color: linkColor }}
            >
              Contact Me
            </Link>
          </VStack>
        )}
      </div>
    </header>
  );
};

export default Header;
