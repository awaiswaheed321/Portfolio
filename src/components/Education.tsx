import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Education: React.FC = () => {
  const educationData = {
    bachelors: {
      degree: "Bachelors in Computer Science",
      university: "SEECS - NUST, Islamabad, Pakistan",
      year: "2015 - 2019",
    },
    masters: {
      degree: "Masters in Computer Science",
      university: "Maharishi International University, Fairfield, Iowa",
      year: "2024 - Present",
    },
  };

  return (
    <Box id="education" sx={{ py: 3 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Education
      </Typography>
      <Grid container spacing={3}>
        {/* Bachelor's Degree */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              bgcolor: "grey.50",
              color: "text.primary",
              borderRadius: 2,
              
            }}
          >
            <Typography variant="body1" fontWeight="bold">
              {educationData.bachelors.degree}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {educationData.bachelors.university}
            </Typography>
            <Typography variant="body2">{educationData.bachelors.year}</Typography>
          </Paper>
        </Grid>

        {/* Master's Degree */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              bgcolor: "grey.50",
              color: "text.primary",
              borderRadius: 2,
            }}
          >
            <Typography variant="body1" fontWeight="bold">
              {educationData.masters.degree}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {educationData.masters.university}
            </Typography>
            <Typography variant="body2">{educationData.masters.year}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
