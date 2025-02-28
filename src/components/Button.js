import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const MyButton = ({ text, onClick = () => {}, variant = 'contained', sx = {} }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        padding: '0.8rem 1.5rem', // Consistent with modern button spacing
        borderRadius: 'var(--border-radius)', // Uses the global border radius (8px)
        fontWeight: 600,
        fontFamily: 'var(--font-primary)',
        textTransform: 'none',
        backgroundColor: variant === 'contained' ? 'var(--color-secondary)' : 'transparent',
        transition: 'transform 0.3s ease, background-color 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          backgroundColor: variant === 'contained' ? 'var(--color-accent)' : 'rgba(0, 0, 0, 0.08)',
        },
        ...sx,
      }}
    >
      {text}
    </Button>
  );
};

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  sx: PropTypes.object,
};

export default MyButton;
