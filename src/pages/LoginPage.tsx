import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import api from '../lib/axios';
import { AxiosError } from 'axios';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      setError('');
      const response = await api.post('/login', { username, password });
      console.log('Login success: ', response.data);
      // TODO: redirect or save user/token
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      setError(error.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <Box maxWidth={400} mx="auto" mt={10} p={4} borderRadius={2} boxShadow={3} display="flex" flexDirection="column" gap={2}>
      <Typography variant="h5" textAlign="center" fontWeight="bold">Login</Typography>

      <TextField label="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required fullWidth />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required fullWidth />

      {error && <Typography color="error" fontSize={14}>{error}</Typography>}

      <Button variant="contained" onClick={handleLogin} fullWidth>Log In</Button>
    </Box>
  );
}
