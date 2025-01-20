import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const MyButton = ({ text, onClick = () => {}, variant = 'contained', sx = {} }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        padding: '12px 24px',
        borderRadius: '4px',
        fontWeight: '600',
        fontFamily: 'var(--font-primary)',
        textTransform: 'none', // Avoid uppercase if not needed
        backgroundColor: variant === 'contained' ? 'var(--color-secondary)' : 'transparent', // Default button color
        '&:hover': {
          backgroundColor: variant === 'contained' ? 'var(--color-accent)' : 'rgba(0, 0, 0, 0.08)', // Teal Green on hover
        },
        ...sx, // Allow additional styles via props
      }}
    >
      {text}
    </Button>
  );
};

// Define the expected prop types
MyButton.propTypes = {
  text: PropTypes.string.isRequired, // Button label text
  onClick: PropTypes.func, // Optional click handler
  variant: PropTypes.string, // MUI button variant
  sx: PropTypes.object, // Custom styles
};

export default MyButton;