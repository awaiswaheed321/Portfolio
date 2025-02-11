import { Download, GitHub, LinkedIn, Mail, Phone } from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Stack, Typography, Tooltip } from "@mui/material";
import { useState } from "react";
import personalImage from "../assets/AW.jpg";

function Hero() {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const contactInfo = {
    email: "awaiswaheed321@gmail.com",
    phone: "+1 (945) 546-4790",
    github: "https://github.com/awaiswaheed321",
    linkedin: "https://www.linkedin.com/in/awaiswaheed96/",
  };

  const buttonStyle = {
    textTransform: 'none',
    px: 2.5,
    py: 1,
    borderRadius: 2,
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    bgcolor: 'primary.main',
    '&:hover': {
      ...buttonStyle['&:hover'],
      bgcolor: 'primary.dark',
    },
  };

  const outlinedButtonStyle = {
    ...buttonStyle,
    borderColor: 'grey.300',
    color: 'text.primary',
    '&:hover': {
      ...buttonStyle['&:hover'],
      borderColor: 'primary.main',
      bgcolor: 'transparent',
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
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Awais Waheed
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Senior Software Engineer
          </Typography>
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
            business needs. Currently pursuing MS in Computer Science at
            MIU, Iowa.
          </Typography>

          <Stack spacing={2}>
            <Box 
              sx={{ 
                display: "flex", 
                gap: 2, 
                flexWrap: "wrap"
              }}
            >
              <Button
                variant="contained"
                startIcon={<Download />}
                href="/Portfolio/AwaisWaheed_Resume.pdf"
                download
                sx={primaryButtonStyle}
              >
                Download CV
              </Button>

              <Tooltip 
                title={showEmail ? "Click to copy" : "Click to show email"}
                arrow
                placement="top"
              >
                <Button
                  variant="outlined"
                  startIcon={<Mail />}
                  onClick={() => {
                    if (showEmail) {
                      navigator.clipboard.writeText(contactInfo.email);
                    }
                    setShowEmail(!showEmail);
                  }}
                  sx={outlinedButtonStyle}
                >
                  {showEmail ? contactInfo.email : "Email"}
                </Button>
              </Tooltip>

              <Tooltip 
                title={showPhone ? "Click to copy" : "Click to show phone"}
                arrow
                placement="top"
              >
                <Button
                  variant="outlined"
                  startIcon={<Phone />}
                  onClick={() => {
                    if (showPhone) {
                      navigator.clipboard.writeText(contactInfo.phone);
                    }
                    setShowPhone(!showPhone);
                  }}
                  sx={outlinedButtonStyle}
                >
                  {showPhone ? contactInfo.phone : "Phone"}
                </Button>
              </Tooltip>
            </Box>

            <Box 
              sx={{ 
                display: "flex", 
                gap: 2
              }}
            >
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
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;