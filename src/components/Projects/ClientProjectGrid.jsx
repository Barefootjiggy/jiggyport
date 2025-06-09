import {
  Grid, Card, CardContent, CardMedia, Typography, Button, CardActions, Box, useMediaQuery, useTheme
} from '@mui/material';

function ClientProjectGrid({ data, bgImage, slideshowStates, startSlideshow, stopSlideshow }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container spacing={2} justifyContent="center">
      {data.map((project) => {
        const current = slideshowStates[project.id] || {};
        const currentIndex = current.imageIndex || 0;

        return (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card style={{ backgroundColor: bgImage === '/mountainsky.webp' ? '#000000' : 'transparent' }}>
              <Box p={2}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="img"
                    loading="lazy"
                    alt={`${project.title} screenshot`}
                    image={current.showNewVersion ? project.afterImages[currentIndex] : project.beforeImageUrl}
                    title={project.title}
                    style={{ objectFit: 'contain', maxHeight: '300px', marginTop: '50px' }}
                  />
                </a>
                {/* Button logic & paused message */}
                {!current.showNewVersion && (
                  <Box display="flex" justifyContent="center" mt={2}>
                    <Button
                    onClick={() => startSlideshow(project.id)}
                    style={{ backgroundColor: '#ab598b', color: '#fff' }}
                    aria-label={
                    project.id === 6
                    ? `Start slideshow for ${project.title}`
                    : `View after version of ${project.title}`
                    }
                    >
                    {project.id === 6 ? 'Click for Slideshow' : 'Click to View After'}
                    </Button>
                  </Box>
                )}

                {current.showNewVersion && (
                  <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
                    <Typography align="center" style={{ color: '#ab598b', marginBottom: '10px' }}>
                      After: Custom Build (Slide {currentIndex + 1}/{project.afterImages.length})
                    </Typography>
                    <Button
                      onClick={() => stopSlideshow(project.id)}
                      style={{ backgroundColor: '#ab598b', color: '#fff' }}
                      aria-label={`Return to WordPress version of ${project.title}`}
                      >
                      Back to WordPress Version
                      </Button>
                  </Box>
                )}
              </Box>

              <CardContent>
                <Typography gutterBottom variant={isMobile ? "h5" : "h2"} style={{ color: '#ab598b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {project.title}
                </Typography>
                <Typography variant="body1" style={{ color: '#ffffff' }}>
                  {project.description}
                </Typography>
              </CardContent>

              <CardActions style={{ justifyContent: 'center' }}>
                <Button href={project.deployedUrl} target="_blank" rel="noopener noreferrer"
                aria-label={`View deployed version of ${project.title}`}>
                Deployed App
                </Button>
                <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                >
                  GitHub Link
                  </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ClientProjectGrid;
