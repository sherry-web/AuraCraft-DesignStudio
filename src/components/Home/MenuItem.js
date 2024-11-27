import React from 'react';
import { MenuItem as MuiMenuItem } from '@mui/material';

const MenuItem = ({ children, ...props }) => {
  return (
    <MuiMenuItem
      {...props}
      sx={{
        fontSize: '16px',
        fontWeight: 500,
        padding: '8px 16px',
        '&:hover': {
          backgroundColor: 'primary.main',
          color: 'white',
        },
      }}
    >
      {children}
    </MuiMenuItem>
  );
};

export default MenuItem;
