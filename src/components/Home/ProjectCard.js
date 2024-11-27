import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

const ProjectCard = ({ imageSrc, title, address }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 3,
        boxShadow: 4,
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={imageSrc}
        alt={title}
        sx={{
          borderRadius: '8px',
          objectFit: 'cover',
        }}
      />
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: 600, color: 'primary.dark' }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: '8px' }}
        >
          {address}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
