import { Box } from '@mui/material';

export default function TaskWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        pt: 8,
        backgroundColor: '#fff',
      }}
    >
      {children}
    </Box>
  );
}
