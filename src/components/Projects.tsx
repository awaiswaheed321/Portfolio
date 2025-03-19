import React from 'react';
import { Box, Typography, Divider, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { projects } from '../ProjectsData';

const Projects: React.FC = () => {
  return (
    <Box sx={{ py: 0 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Key Projects
      </Typography>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper 
          elevation={1} 
          sx={{ 
            background: 'rgba(245, 245, 245, 0.9)',
            borderRadius: 1,
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          {projects.map((project, index) => (
            <Box key={index}>
              <Box sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
                  <Typography variant="body1" component="h3" sx={{ fontWeight: 500 }}>
                    {project.name}
                  </Typography>
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} />
                  <Typography variant="body2" color="textSecondary">
                    {project.company}
                  </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary" sx={{ mt: 0.5 }}>
                  {project.description}
                </Typography>
              </Box>
              {index < projects.length - 1 && (
                <Divider sx={{ opacity: 0.3 }} />
              )}
            </Box>
          ))}
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Projects;