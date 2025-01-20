import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

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

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BackButton;