import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const Background = styled('div')({
  backgroundImage: 'url("https://images.pexels.com/photos/1881621/pexels-photo-1881621.jpeg")',
  height: '100vh', // Ensures full viewport height coverage
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

function Projects() {
  return (
    <Background>
      <Button variant="contained">Projects</Button>
    </Background>
  );
}

export default Projects;
