const Loader = () => {
  return (
    <div style={styles.loaderWrapper}>
      <div style={styles.planet}></div>
      <div style={styles.orbit}></div>
      <style>
        {`
          @keyframes orbit {
            0% { transform: rotate(0deg) translateX(40px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  loaderWrapper: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  planet: {
    width: '16px',
    height: '16px',
    backgroundColor: '#ab598b',
    borderRadius: '50%',
    position: 'absolute',
    animation: 'orbit 1.5s linear infinite',
  },
  orbit: {
    width: '80px',
    height: '80px',
    border: '2px dashed #ccc',
    borderRadius: '50%',
    position: 'relative',
  }
};

export default Loader;

