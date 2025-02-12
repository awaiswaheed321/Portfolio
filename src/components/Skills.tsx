import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const skills = [
  "Problem Solving",
  "Critical Thinking",
  "Design & Architecture",
  "API Design",
  "Code Review & Best Practices",
  "REST",
  "Requirement Analysis",
  "Scalability & Performance Optimization",
  "CI/CD",
  "Testing",
  "Deployment",
  "Agile",
  "Scrum",
  "Communication & Collaboration",
  "Continuous Improvement & Learning",
  "Time Management",
  "Design Patterns"
];


const Skills: React.FC = () => {
  return (
    <Box id="skills" sx={{ maxWidth: "4xl", mx: "auto", pt: 2 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Skills
      </Typography>

      <Stack direction="row" flexWrap="wrap" gap={1.5}>
        {skills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              px: 2,
              py: 1,
              bgcolor: (theme) => theme.palette.grey[200],
              borderRadius: 1,
              fontSize: "0.875rem",
              color: "text.primary",
            }}
          >
            <Typography>{skill}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Skills;