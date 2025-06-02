import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { logout } from '../../services/authService';

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          component={RouterLink}
          to="/"
          variant="h6"
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
        >
          My App
        </Typography>

        <Button color="inherit" onClick={handleLogout} aria-label="Logout">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
