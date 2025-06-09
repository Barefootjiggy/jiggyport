import { keyframes } from '@mui/system';
import { styled } from '@mui/system';

const moveBackground = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 -3000px; 
  }
`;

const AnimatedBackground = styled('div')`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(${props => props.bgImage}); 
  background-size: cover;
  background-repeat: repeat-y; 
  animation: ${moveBackground} 60s linear infinite;
  z-index: -1; 
`;

function BackgroundCycler({ bgImage }) {
  return (
    <AnimatedBackground 
    bgImage={bgImage} 
    aria-hidden="true"
    />
  );
}

export default BackgroundCycler;