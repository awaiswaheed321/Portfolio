import React from 'react';
import { Box, Container, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { contactInfo } from "../ContactInfo";

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer" 
      sx={{
        py: 4,
        mt: 'auto',
        borderTop: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} alignItems="center">
          {/* Social Links */}
          <Stack 
            direction="row" 
            spacing={2} 
            sx={{ 
              '& a': { 
                color: 'text.secondary',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'translateY(-2px)'
                }
              }
            }}
          >
            <IconButton 
              component="a" 
              href={contactInfo.github}
              target="_blank"
              aria-label="GitHub"
            >
              <GitHub />
            </IconButton>
            <IconButton 
              component="a" 
              href={contactInfo.linkedin}
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </IconButton>
            <IconButton 
              component="a" 
              href={`mailto:${contactInfo.email}`}
              aria-label="Email"
            >
              <Email />
            </IconButton>
          </Stack>

          {/* Copyright */}
          <Typography 
            variant="body2" 
            color="text.secondary" 
            align="center"
          >
            © {currentYear} Awais Waheed. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;