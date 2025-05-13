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
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';

interface ProfileEditModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (profile: { fullName: string; email: string }) => void;
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
  onSave,
  initialProfile,
}: ProfileEditModalProps) {
  const [fullName, setFullName] = useState(initialProfile.fullName);
  const [email, setEmail] = useState(initialProfile.email);
  const [bio, setBio] = useState(initialProfile.bio);

  const handleSave = () => {
    onSave({ fullName, email });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={2}>
          <Avatar
            src={initialProfile.avatarUrl}
            sx={{ width: 80, height: 80 }}
          />
          <IconButton size="small">
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
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  );
}
