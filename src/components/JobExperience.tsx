import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useRef } from "react";

interface JobExperienceProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string;
  expanded: boolean;
  onChange: () => void;
}

const JobExperience: React.FC<JobExperienceProps> = ({
  title,
  company,
  duration,
  location,
  responsibilities,
  technologies,
  expanded,
  onChange,
}) => {
  const accordionRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (expanded && accordionRef.current) {
      const ANIMATION_DURATION = 300;
      const HEADER_OFFSET = isMobile ? 56 : 64;
      
      setTimeout(() => {
        const elementPosition = accordionRef.current?.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - HEADER_OFFSET;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, ANIMATION_DURATION);
    }
  }, [expanded, isMobile]);

  return (
    <Box 
      ref={accordionRef}
      sx={{
        scrollMarginTop: theme => theme.spacing(isMobile ? 8 : 10),
        mb: 2 // Add margin bottom to prevent accordions from touching
      }}
    >
      <Accordion
        expanded={expanded}
        onChange={onChange}
        TransitionProps={{ timeout: 300 }} // Match with animation duration
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 2,
          "&:before": { display: "none" },
          "&.Mui-expanded": {
            margin: 0, // Prevent margin jumping
          }
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          sx={{
            bgcolor: "grey.200",
            color: "text.primary",
            borderRadius: 2,
            minHeight: 64, // Ensure consistent height
            "& .MuiAccordionSummary-content": {
              margin: "12px 0",
              "&.Mui-expanded": {
                margin: "12px 0" // Consistent margins when expanded
              }
            }
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="body1" fontWeight="bold">
                {title} ({duration})
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {company} - {location}
              </Typography>
            </Grid>
          </Grid>
        </AccordionSummary>

        <AccordionDetails 
          sx={{ 
            bgcolor: "grey.100", 
            borderRadius: 2, 
            p: 2,
            transition: theme => theme.transitions.create('all')
          }}
        >
          <Box>
            <ul style={{ 
              paddingLeft: 20,
              margin: '8px 0'
            }}>
              {responsibilities.map((task, index) => (
                <li key={index}>
                  <Typography 
                    variant="body2" 
                    color="text.primary"
                    sx={{ mb: 1 }}
                  >
                    {task}
                  </Typography>
                </li>
              ))}
            </ul>
            <Typography 
              variant="body2" 
              color="text.primary"
              sx={{ mt: 2 }}
            >
              <strong>Technologies Used:</strong> {technologies}
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default JobExperience;