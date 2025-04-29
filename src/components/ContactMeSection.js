import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import "./cssfiles/contactmesection.css";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const { colorMode } = useColorMode(); // Hook for dynamic theme handling

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {
      submit("api/url", values); // Passing the URL and values to submit
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      type: Yup.string().required("Type of enquiry is required"),
      comment: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
  });

  useEffect(() => {
    if (response) {
      const firstName = formik.values.firstName;
      if (response.type === "success") {
        onOpen("success", `Thank you, ${firstName}. Your message has been sent.`);
        formik.resetForm();
      } else {
        onOpen("error", response.message);
      }
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#2a4365"
      py={16}
      spacing={8}
      id="contactme-section"
    >
      <div className={`contact-us-wrapper ${colorMode}`}>
        <div className="contact-us-left">
          <h2>Contact me</h2>
          <p>
            Feel free to reach out with any questions or proposals. I look
            forward to hearing from you!
          </p>
        </div>

        <div className="contact-us-right scroll-hover">
          <h2>Get in Touch</h2>
          <Box p={3} rounded="md" w="100%">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={3} align="stretch">
                <FormControl
                  isInvalid={formik.touched.firstName && formik.errors.firstName}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <FormLabel htmlFor="firstName" margin="0">
                      Name
                    </FormLabel>
                    {formik.touched.firstName && formik.errors.firstName && (
                      <FormErrorMessage margin="0" color="red.500">
                        {formik.errors.firstName}
                      </FormErrorMessage>
                    )}
                  </Box>
                  <Input id="firstName" name="firstName" {...formik.getFieldProps("firstName")} />
                </FormControl>

                <FormControl
                  isInvalid={formik.touched.email && formik.errors.email}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <FormLabel htmlFor="email" margin="0">
                      Email Address
                    </FormLabel>
                    {formik.touched.email && formik.errors.email && (
                      <FormErrorMessage margin="0" color="red.500">
                        {formik.errors.email}
                      </FormErrorMessage>
                    )}
                  </Box>
                  <Input id="email" name="email" type="email" {...formik.getFieldProps("email")} />
                </FormControl>

                <FormControl
                  isInvalid={formik.touched.type && formik.errors.type}
                >
                  <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                  <Select id="type" name="type" {...formik.getFieldProps("type")}>
                    <option value="hireMe">Freelance project proposal</option>
                    <option value="openSource">Hiring Opportunity</option>
                    <option value="other">Other</option>
                  </Select>
                  <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={formik.touched.comment && formik.errors.comment}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <FormLabel htmlFor="comment" margin="0">
                      Your message
                    </FormLabel>
                    {formik.touched.comment && formik.errors.comment && (
                      <FormErrorMessage margin="0" color="red.500">
                        {formik.errors.comment}
                      </FormErrorMessage>
                    )}
                  </Box>
                  <Textarea id="comment" name="comment" height={100} {...formik.getFieldProps("comment")} />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  width="full"
                  isLoading={isLoading}
                  loadingText="Submitting"
                >
                  Submit
                </Button>
              </VStack>
            </form>
          </Box>
        </div>
      </div>
    </FullScreenSection>
  );
};

export default ContactMeSection;
