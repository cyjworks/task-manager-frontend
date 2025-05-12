import { useEffect, useState } from 'react';
import { Box, Avatar, Typography, Button, Divider, CircularProgress } from '@mui/material';
import api from '../lib/axios';
import { AxiosError } from 'axios';

interface UserData {
  username: string;
  email: string;
  createdAt: string;
  bio: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<UserData | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // TODO: replace with value from localStorage or cookie
        const username = 'cyj1';
        const res = await api.get('/me', {
          params: { username }
        });
        setUser(res.data.data);
      } catch (err) {
        const axiosError = err as AxiosError<{ message: string }>;
        setError(axiosError.response?.data?.message || 'Failed to load user data.');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if(loading) return <CircularProgress sx={{ mt: 6, display: 'block', mx: 'auto' }} />;
  if(error) return <Typography color="error" mt={6} textAlign="center">{error}</Typography>;
  if(!user) return null;

  const formattedDate = new Date(user.createdAt).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Box maxWidth={500} mx="auto" mt={6} p={4} borderRadius={2} boxShadow={3} bgcolor="white">
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Avatar sx={{ width: 80, height: 80 }}>{user.username?.charAt(0).toUpperCase() || 'U'}</Avatar>
        <Typography variant="h6">{user.username}</Typography>
        <Typography variant="body2" color="text.secondary">{user.email}</Typography>
        <Typography variant="body2" color="text.secondary">Joined: {formattedDate}</Typography>

        <Divider sx={{ width: '100%', my: 2 }} />

        <Typography variant="subtitle1" fontWeight="bold" alignSelf="flex-start">About Me</Typography>
        <Typography variant="body1" alignSelf="flex-start">{user.bio}</Typography>

        <Button variant="outlined" fullWidth sx={{ mt: 3 }}>
          Edit Profile
        </Button>
      </Box>
    </Box>
  );
}
