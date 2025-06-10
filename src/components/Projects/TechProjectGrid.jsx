import {
  Grid, Card, CardContent, CardMedia, Typography, Button, CardActions, Box, useMediaQuery, useTheme
} from '@mui/material';

function TechProjectGrid({ data, bgImage }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container spacing={2} justifyContent="center">
      {data.map((project) => (
        <Grid item xs={12} sm={6} md={4} key={project.id}>
          <Card style={{ backgroundColor: bgImage === '/mountainsky.webp' ? '#000000' : 'transparent' }}>
            <Box p={2}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <CardMedia
                  component="img"
                  loading="lazy"
                  alt={`${project.title} screenshot`}
                  image={project.imageUrl}
                  title={project.title}
                  style={{ objectFit: 'contain', maxHeight: '300px', marginTop: '50px' }}
                />
              </a>
            </Box>

            <CardContent>
              <Typography gutterBottom variant={isMobile ? "h5" : "h2"} style={{ color: '#ab598b' }}>
                {project.title}
              </Typography>
              <Typography variant="body1" style={{ color: '#ffffff' }}>
                {project.description}
              </Typography>
            </CardContent>

            <CardActions style={{ justifyContent: 'center' }}>
              <Button
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View deployed version of ${project.title}`}
              >
              Deployed App
              </Button>
              <Button
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              >
              GitHub Link
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default TechProjectGrid;
