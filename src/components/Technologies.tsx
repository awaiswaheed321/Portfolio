import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import {
  SiSpringboot,
  SiHibernate,
  SiNestjs,
  SiSwagger,
  SiMysql,
  SiPostgresql,
  SiAmazondynamodb,
  SiPostman,
  SiGit,
  SiJenkins,
  SiKubernetes,
  SiDocker,
  SiApachekafka,
  SiStripe,
  SiIntellijidea,
} from "react-icons/si";

const ICON_SIZE = 80;

const technologies = [
  { name: "Java", image: "https://cdn.worldvectorlogo.com/logos/java.svg" },
  { name: "Spring Boot", icon: <SiSpringboot size={ICON_SIZE} color="#6DB33F" /> },
  { name: "Hibernate", icon: <SiHibernate size={ICON_SIZE} color="#59666C" /> },
  { name: "Nest.js", icon: <SiNestjs size={ICON_SIZE} color="#E0234E" /> },
  { name: "Swagger", icon: <SiSwagger size={ICON_SIZE} color="#85EA2D" /> },
  { name: "MySQL", icon: <SiMysql size={ICON_SIZE} color="#4479A1" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={ICON_SIZE} color="#336791" /> },
  { name: "Amazon RDS", icon: <SiAmazondynamodb size={ICON_SIZE} color="#527FFF" /> },
  { name: "Postman", icon: <SiPostman size={ICON_SIZE} color="#FF6C37" /> },
  { name: "Maven", image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Apache_Maven_logo.svg" },
  { name: "Git", icon: <SiGit size={ICON_SIZE} color="#F05032" /> },
  { name: "Jenkins", icon: <SiJenkins size={ICON_SIZE} color="#D24939" /> },
  { name: "Kubernetes", icon: <SiKubernetes size={ICON_SIZE} color="#326CE5" /> },
  { name: "AWS", image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Apache Kafka", icon: <SiApachekafka size={ICON_SIZE} color="#231F20" /> },
  { name: "Docker", icon: <SiDocker size={ICON_SIZE} color="#2496ED" /> },
  { name: "Stripe", icon: <SiStripe size={ICON_SIZE} color="#6772E5" /> },
  { name: "IntelliJ IDEA", icon: <SiIntellijidea size={ICON_SIZE} color="#000000" /> },
];

const Technologies: React.FC = () => {
  return (
    <Box id="technologies">
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ pb: 1 }}>
        Technologies
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {technologies.map((tech, index) => (
          <Grid item key={index} sx={{ textAlign: "center" }}>
            {tech.icon ? (
              tech.icon
            ) : (
              <img
                src={tech.image}
                alt={tech.name}
                width={ICON_SIZE}
                height={ICON_SIZE}
                style={{ objectFit: "contain" }}
              />
            )}
            <Typography variant="body2" mt={1} fontSize="0.75rem">
              {tech.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Technologies;
