import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (!email || !username || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    // TODO: call signup API
    console.log('Signing up with:', { email, username, password });
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 400,
        p: 4,
        bgcolor: 'white',
        borderRadius: 2,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h5" fontWeight="bold" textAlign="center">
        Sign Up
      </Typography>

      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
      />

      {error && (
        <Typography color="error" fontSize={14}>
          {error}
        </Typography>
      )}

      <Button variant="contained" onClick={handleSignup} fullWidth>
        Sign Up
      </Button>
    </Box>
  );
}
