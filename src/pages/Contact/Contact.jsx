import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const Background = styled('div')({
  backgroundImage: 'url("https://images.pexels.com/photos/1587699/pexels-photo-1587699.jpeg")',
  height: '100vh', // Full viewport height
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

function Contact() {
  return (
    <Background>
      <Button variant="contained">Contact</Button>
    </Background>
  );
}

export default Contact;
