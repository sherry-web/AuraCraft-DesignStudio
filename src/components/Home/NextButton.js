import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

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
        fontFamily: 'var(--font-primary)',
        '&:hover': {
          backgroundColor: 'primary.dark',
        },
      }}
    >
      Next
    </Button>
  );
};

NextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NextButton;