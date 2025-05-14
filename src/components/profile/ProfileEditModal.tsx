import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import api from '../../lib/axios';
import { AxiosError } from 'axios';

interface ProfileEditModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  initialProfile: {
    fullName: string;
    email: string;
    bio: string;
    avatarUrl?: string;
  };
}

export default function ProfileEditModal({
  open,
  onClose,
  onSuccess,
  initialProfile,
}: ProfileEditModalProps) {
  const [fullName, setFullName] = useState(initialProfile.fullName);
  const [email, setEmail] = useState(initialProfile.email);
  const [bio, setBio] = useState(initialProfile.bio);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    setError('');

    try {
      const username = 'cyj1'; // TODO: replace with value from localStorage or cookie
      await api.put('/me', {
        fullName,
        email,
        bio,
      }, {
        params: { username: username }
      });

      onSuccess(); // Notify parent to refresh data
    } catch (err) {
      const axiosError = err as AxiosError<{ message: string }>;
      setError(
        axiosError.response?.data?.message || 'Failed to update profile.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          mt={2}
        >
          <Avatar src={initialProfile.avatarUrl} sx={{ width: 80, height: 80 }} />
          <IconButton size="small" aria-label="change avatar">
            <EditIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box mt={3} display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Full Name"
            fullWidth
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Bio"
            fullWidth
            multiline
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </Box>

        {error && (
          <Typography color="error" mt={2}>
            {error}
          </Typography>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          disabled={loading}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
