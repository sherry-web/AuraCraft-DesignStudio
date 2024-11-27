import React from 'react';
import { Button } from '@mui/material';

const NextButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      sx={{
        padding: '6px 16px',
        borderRadius: '24px',
        fontWeight: 600,
        '&:hover': {
          backgroundColor: 'primary.dark',
        },
      }}
    >
      Next
    </Button>
  );
};

export default NextButton;
