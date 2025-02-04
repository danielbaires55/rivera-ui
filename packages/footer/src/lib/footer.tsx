import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
        backgroundColor: '#1976d2',
        padding: '16px 0',
      }}
    >
      <Typography variant="body2" color="white">
        &copy; {new Date().getFullYear()} Rivera-Ui. All rights reserved. 
        <Link href="#" sx={{ color: 'white', textDecoration: 'none', marginLeft: 1 }}>
          Privacy Policy
        </Link> | 
        <Link href="#" sx={{ color: 'white', textDecoration: 'none', marginLeft: 1 }}>
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;