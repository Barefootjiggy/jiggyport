import { useState } from 'react';
import { styled } from '@mui/system';
import { Button, TextField, Grid, Paper, Typography } from '@mui/material';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement what you want to do with the data here
    console.log(formData);
  };

  return (
    <Background>
      <Paper style={{ padding: 16, width: '300px' }}>
        <Typography variant="h6" gutterBottom>
          Reach Out
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                name="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                name="message"
                label="Message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Background>
  );
}

export default Contact;
