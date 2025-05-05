import { Box } from '@mui/material';

export default function LoginWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
