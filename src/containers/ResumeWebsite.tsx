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
    primary: { main: "#4169E1" }, // Royal Blue
    secondary: { main: "#F5F9FF" }, // Soft Sky Blue
    background: { default: "#F8FAFD" }, // Light Cool Background
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
          background: "radial-gradient(circle at top, rgba(65,105,225,0.3), rgba(245,249,255,0.8))",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Soft Accent Shape at Top */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "200px",
            backgroundColor: "rgba(65, 105, 225, 0.1)",
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
