import { useState, useEffect, lazy, Suspense, memo } from 'react';
import { Grid, Typography, Avatar, Box, styled } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import Loader from '../../components/Loader/Loader'
import { skills } from '../../Data/Skills';
import Profile from '../../assets/Profile.webp';

const Projects = lazy(() => import('../../components/Projects/Projects'));


const StyledAvatar = styled(Avatar)({
  width: 200, 
  height: 220,
  margin: '20px auto', 
  cursor: 'pointer'
});

const CenteredTypography = styled(Typography)(({ bgImage }) => ({
  textAlign: 'center',
  color: bgImage === '/mountainsky.webp' ? '#000000' : '#ffffff',
  marginBottom: '20px',
}));

const ProfileBox = styled(Box)({
  textAlign: 'center',
  paddingTop: '100px' 
});

const FlickerText = styled(animated(Typography))({
  textAlign: 'center',
  marginBottom: '20px',
});

const AnimatedGridItem = memo(function AnimatedGridItem({ name, imageUrl, bgImage }) {
  const [props, set] = useSpring(() => ({
    transform: 'scale(1)',
    boxShadow: '6px 6px 6px rgba(21,15,15,0)',
    config: { tension: 300, friction: 5 }
  }));

return (
    <Grid item xs={4} md={2}
      onMouseEnter={() => set({ transform: 'scale(1.1)', boxShadow: '0px 4px 8px rgba(171,89,139,1)' })}
      onMouseLeave={() => set({ transform: 'scale(1)', boxShadow: '0px 0px 0px rgba(0,0,0,0)' })}
    >
      <animated.div style={props}>
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          style={{ width: 'auto', height: '50px', marginBottom: '10px' }}
        />
        <Typography variant="subtitle2"
        component="p"
         style={{ color: bgImage === '/mountainsky.webp' ? '#000000' : '#ffffff' }}>{name}
         </Typography>
      </animated.div>
    </Grid>
  );
});

function Homepage({ bgImage }) {
  const slideInProps = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
    config: { tension: 120, friction: 14 }
  });

  const [rotate, setRotate] = useState(false);
  const rotateProps = useSpring({
    transform: rotate ? 'rotate(360deg)' : 'rotate(0deg)',
    config: { duration: 500 }
  });

  useEffect(() => {
    setRotate(true);

    const timer = setTimeout(() => setRotate(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAvatarClick = () => {
    setRotate(!rotate);
  };

  const smoothTransitionProps = useSpring({
    from: { color: '#ffffff' },
    to: async (next) => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        await next({ color: '#ab598b' });
        await next({ color: '#ffffff' });
      }
    },
    config: { duration: 2000, easing: t => t * t * (3 - 2 * t) }, 
  });

  return (
    <animated.div style={slideInProps}>
      <ProfileBox>
        <FlickerText variant="h2" component="h1" style={smoothTransitionProps}>
          Joshua Pierre
        </FlickerText>
        <animated.div style={rotateProps}>
          <StyledAvatar src={Profile} alt="Photo of Joshua Pierre" onClick={handleAvatarClick} />
        </animated.div>
        <CenteredTypography variant="h6" component="p" padding="0 20px" bgImage={bgImage}>
        I’m a full-stack software engineer with a background in healthcare and customer service. After completing General Assembly’s Software Engineering Immersive, I’ve focused on building clean, responsive web apps using React, JavaScript, and modern frameworks. Recently, I redesigned a personal training site, replacing a restrictive WordPress setup with a custom React build that’s faster, more modern, and user-friendly. I bring strong communication, real-world client experience, and a passion for solving problems through thoughtful, accessible design.
        </CenteredTypography>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {skills.map(skill => (
            <AnimatedGridItem
              key={skill.name}
              name={skill.name}
              imageUrl={skill.image}
              bgImage={bgImage}
            />
          ))}
        </Grid>

        <Suspense fallback={<Loader />}>
          <Projects bgImage={bgImage} />
        </Suspense>
      </ProfileBox>
    </animated.div>
  );
}

export default Homepage;
