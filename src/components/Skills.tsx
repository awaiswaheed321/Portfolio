import React from "react";
import { Box, Typography, Stack } from "@mui/material";

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
    <Box id="skills" sx={{ maxWidth: "4xl", mx: "auto", p: 3 }}>
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
              bgcolor: (theme) => theme.palette.grey[50],
              borderRadius: 1,
              fontSize: "0.875rem",
              color: "text.primary",
              cursor: "default",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                bgcolor: (theme) => theme.palette.grey[200],
                transform: "translateY(-2px)",
                boxShadow: (theme) => theme.shadows[2],
              }
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