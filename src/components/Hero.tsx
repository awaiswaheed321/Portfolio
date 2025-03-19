import {
  Download,
  GitHub,
  LinkedIn,
  LocationOn,
  Mail,
} from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import personalImage from "../assets/01.jpg";
import { contactInfo } from "../ContactInfo";

function Hero() {

  const buttonStyle = {
    textTransform: "none",
    px: 2.5,
    py: 1,
    borderRadius: 2,
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    bgcolor: "primary.main",
    "&:hover": {
      ...buttonStyle["&:hover"],
      bgcolor: "primary.dark",
    },
  };

  const outlinedButtonStyle = {
    ...buttonStyle,
    borderColor: "grey.300",
    color: "text.primary",
    "&:hover": {
      ...buttonStyle["&:hover"],
      borderColor: "primary.main",
      bgcolor: "transparent",
    },
  };

  return (
    <Box id="about" sx={{ py: 5 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4} textAlign="center">
          <Avatar
            src={personalImage}
            sx={{
              width: 250,
              height: 250,
              mx: "auto",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Awais Waheed
          </Typography>
          <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 2 }}>
            <Typography variant="h6" color="text.secondary">
              Senior Software Engineer
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{
                color: "text.secondary",
                bgcolor: "grey.50",
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  bgcolor: "grey.100",
                  transform: "translateY(-1px)",
                },
              }}
            >
              <LocationOn sx={{ fontSize: 20 }} />
              <Typography variant="body2">Fairfield, Iowa</Typography>
            </Stack>
          </Stack>
          <Typography
            color="text.secondary"
            paragraph
            sx={{ textAlign: "justify" }}
          >
            Software Engineer with 5 years of experience building scalable
            backend systems and integrating third-party solutions. Skilled in
            Java, Spring Boot, Hibernate, MySQL, and REST APIs, with additional
            experience in Kubernetes, AWS, and Kafka. Passionate about
            delivering high-quality, efficient software that aligns with
            business needs.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              startIcon={<Download />}
              href="/AwaisWaheed_Resume.pdf"
              download
              sx={primaryButtonStyle}
            >
              Download CV
            </Button>

            <Button
              variant="outlined"
              startIcon={<Mail />}
              href={`mailto:${contactInfo.email}`}
              sx={outlinedButtonStyle}
            >
              Email
            </Button>

            <Button
              variant="outlined"
              startIcon={<GitHub />}
              onClick={() => window.open(contactInfo.github, "_blank")}
              sx={outlinedButtonStyle}
            >
              GitHub
            </Button>

            <Button
              variant="outlined"
              startIcon={<LinkedIn />}
              onClick={() => window.open(contactInfo.linkedin, "_blank")}
              sx={outlinedButtonStyle}
            >
              LinkedIn
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
