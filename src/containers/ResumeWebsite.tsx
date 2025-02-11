import { Box, Container } from "@mui/material";
import Hero from "../components/Hero";
import ExperienceContainer from "./ExperienceContainer";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Technologies from "../components/Technologies";

const ResumeWebsite = () => {
  return (
    <Box>
      {/* <Navigation /> */}
      <Container >
        <Hero />
        <ExperienceContainer />
        <Education />
        <Technologies />
        <Skills />
      </Container>
    </Box>
  );
};

export default ResumeWebsite;
