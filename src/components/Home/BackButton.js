import React from 'react';
import { Button } from '@mui/material';

const BackButton = ({ onClick }) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={onClick}
      sx={{
        padding: '6px 16px',
        borderRadius: '24px',
        fontWeight: 500,
        '&:hover': {
          backgroundColor: 'primary.light',
          borderColor: 'primary.main',
        },
      }}
    >
      Back
    </Button>
  );
};

export default BackButton;
