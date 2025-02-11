import React from "react";
import { Box, Grid, Typography, Chip } from "@mui/material";

const skills = [
  "REST",
  "API Design",
  "Agile",
  "Scrum",
  "CI/CD",
  "Requirement Analysis",
  "Design & Architecture",
  "Testing",
  "Deployment",
  "Design Patterns"
];

const Skills: React.FC = () => {
  return (
    <Box id="skills">
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Skills
      </Typography>

      <Grid container spacing={1} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Chip
              label={skill}
              sx={{
                px: 2,
                py: 1,
                fontSize: "0.9rem",
                fontWeight: "500",
                bgcolor: "grey.100",
                border: "1px solid #ccc",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
