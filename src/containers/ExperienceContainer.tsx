import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import JobExperience from "../components/JobExperience";
import { jobs } from "../JobsData";

const ExperienceContainer: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const handleAccordionChange = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <Box id="experience" sx={{ py: 1 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Experience
      </Typography>

      {jobs.map((job, index) => (
        <JobExperience
          key={index}
          title={job.title}
          company={job.company}
          duration={job.duration}
          location={job.location}
          responsibilities={job.responsibilities}
          technologies={job.technologies}
          expanded={expandedJob === index}
          onChange={() => handleAccordionChange(index)}
        />
      ))}
    </Box>
  );
};

export default ExperienceContainer;
