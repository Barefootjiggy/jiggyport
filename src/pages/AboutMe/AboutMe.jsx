import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const Background = styled('div')({
  backgroundImage: 'url("https://images.pexels.com/photos/1336924/pexels-photo-1336924.jpeg")',
  height: '100vh', // Full viewport height
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

function AboutMe() {
  return (
    <Background>
      <Button variant="contained">About Me</Button>
    </Background>
  );
}

export default AboutMe;
