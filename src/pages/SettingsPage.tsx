import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Switch,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from '@mui/material';
import { useState } from 'react';

export default function SettingsPage() {
  const [mode, setMode] = useState<'classic' | 'flow'>('classic');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Box maxWidth="600px" mx="auto" p={4}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Settings
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* Account Section */}
      <Typography variant="subtitle1" gutterBottom>
        Account
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Username" secondary="cyjworks" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary="cyj@example.com" />
        </ListItem>
        <ListItem>
          <Button variant="outlined" color="primary" fullWidth>
            Log Out
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="text" color="error" fullWidth>
            Delete Account
          </Button>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      {/* Mode Selection */}
      <Typography variant="subtitle1" gutterBottom>
        Scheduling Mode
      </Typography>
      <RadioGroup value={mode} onChange={(e) => setMode(e.target.value as 'classic' | 'flow')}>
        <FormControlLabel value="classic" control={<Radio />} label="Classic Mode" />
        <FormControlLabel value="flow" control={<Radio />} label="Flow Mode" />
      </RadioGroup>

      <Divider sx={{ my: 3 }} />

      {/* Appearance Settings */}
      <Typography variant="subtitle1" gutterBottom>
        Appearance
      </Typography>
      <FormControlLabel
        control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
        label="Dark Mode"
      />

      <Divider sx={{ my: 3 }} />

      {/* Others */}
      <Typography variant="caption" display="block" color="text.secondary">
        Version 0.1.0
      </Typography>
      <Typography variant="caption" display="block" color="text.secondary">
        Feedback: contact@taskmanager.com
      </Typography>
    </Box>
  );
}
