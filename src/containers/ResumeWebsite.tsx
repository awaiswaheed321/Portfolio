import { Box, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Technologies from "../components/Technologies";
import ExperienceContainer from "./ExperienceContainer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#c1121f",
    },
    secondary: {
      main: "#fdf0d5",
    },
  },
  typography: {
    fontFamily: '"Segoe UI"',
  },
});

const ResumeWebsite = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/* <Navigation /> */}
        <Container>
          <Hero />
          <ExperienceContainer />
          <Technologies />
          <Skills />
          <Education />
          <Footer />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ResumeWebsite;
