import React from 'react';
import { Box, Typography, Paper, Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const MemoizedProjectCard = React.memo(ProjectCard);


function ProjectCard({ project, showGithub = true, showURL = true }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref}>
      <Fade in={inView} timeout={600}>
        <Box mb={3}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h6" sx={{ color: '#ab598b' }}>
                {project.title}
                {showGithub && project.github && (
                  <> - <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: '#2196f3', textDecoration: 'none' }}>GitHub</a></>
                )}
                {showURL && project.url && (
                  <> - <a href={project.url || project.app} target="_blank" rel="noopener noreferrer" style={{ color: '#2196f3', textDecoration: 'none' }}>App</a></>
                )}
              </Typography>
              {project.stack && (
                <Typography variant="body2" sx={{ color: '#000' }}>
                  {project.stack}
                </Typography>
              )}
              {Array.isArray(project.description) &&
                project.description.map((line, i) => (
                  <Typography key={i} variant="body1" sx={{ color: '#000' }}>
                    {line}
                  </Typography>
                ))}
            </Box>
          </Paper>
        </Box>
      </Fade>
    </div>
  );
}

export default MemoizedProjectCard;
