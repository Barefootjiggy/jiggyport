import { keyframes } from '@mui/system';
import { styled } from '@mui/system';

// Keyframes for moving the background upwards
const moveBackground = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 -3000px; /* Adjust based on the height of your image */
  }
`;

// Styled component for the body to apply the animation
const AnimatedBackground = styled('div')`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url('/deepsky.jpg'); /* Update the path to your image */
  background-size: cover;
  background-repeat: repeat-y; 
  animation: ${moveBackground} 60s linear infinite;
  z-index: -1; /* Ensure it is behind other elements */
`;

function BackgroundCycler() {
  return <AnimatedBackground />;
}

export default BackgroundCycler;