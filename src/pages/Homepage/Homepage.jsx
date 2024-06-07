import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const Background = styled('div')({
  backgroundImage: 'url("https://images.pexels.com/photos/2088172/pexels-photo-2088172.jpeg")',
  height: '100vh',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

function Homepage() {
  return (
    <Background>
      <Button variant="contained">Homepage</Button>
    </Background>
  );
}

export default Homepage;
