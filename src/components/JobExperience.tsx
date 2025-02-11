import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
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
  useEffect(() => {
    if (expanded && accordionRef.current) {
      setTimeout(() => {
        accordionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [expanded]);

  return (
    <Box ref={accordionRef}>
      <Accordion
        expanded={expanded}
        onChange={onChange}
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 2,
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          sx={{
            bgcolor: "grey.200",
            color: "text.primary",
            borderRadius: 2,
            "& .MuiAccordionSummary-content": {
              marginY: 1,
            },
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

        <AccordionDetails sx={{ bgcolor: "grey.100", borderRadius: 2, p: 2 }}>
          <Box>
            <ul style={{ paddingLeft: 20 }}>
              {responsibilities.map((task, index) => (
                <li key={index}>
                  <Typography variant="body2" color="text.primary">
                    {task}
                  </Typography>
                </li>
              ))}
            </ul>
            <Typography variant="body2" color="text.primary">
              Technologies Used: {technologies}
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default JobExperience;
