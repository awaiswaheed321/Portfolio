import { Box, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Technologies from "../components/Technologies";
import ExperienceContainer from "./ExperienceContainer";
import Projects from "../components/Projects";

const theme = createTheme({
  palette: {
    primary: { main: "#6b9080" },
  },
  typography: {
    fontFamily: '"Segoe UI", sans-serif',
  },
});

const ResumeWebsite = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          background: "radial-gradient(circle at top, rgba(204, 227, 222,0.3), rgba(245,249,255,0.8))",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Soft Accent Shape at Top of background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "200px",
            backgroundColor: "rgba(49, 145, 145, 0.1)",
            clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)",
          }}
        />

        <Container
          sx={{
            backgroundColor: "white",
            borderRadius: 4,
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            padding: 3,
            zIndex: 1,
            transition: "transform 0.3s ease-in-out",
            // "&:hover": { transform: "scale(1.01)" },
          }}
        >
          <Hero />
          <ExperienceContainer />
          <Projects />
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
