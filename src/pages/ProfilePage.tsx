import { Box, Avatar, Typography, Button, Divider } from '@mui/material';

export default function ProfilePage() {
  const user = {
    nickname: 'cyjworks',
    email: 'cyj@example.com',
    joinDate: '2025-05-11',
    bio: 'Exploring flow through mindful tracking.',
  };

  const formattedDate = new Date(user.joinDate).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Box maxWidth={500} mx="auto" mt={6} p={4} borderRadius={2} boxShadow={3} bgcolor="white">
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Avatar sx={{ width: 80, height: 80 }}>{user.nickname[0]?.toUpperCase()}</Avatar>
        <Typography variant="h6">{user.nickname}</Typography>
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
