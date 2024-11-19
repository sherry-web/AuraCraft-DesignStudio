import { Card, CardContent, Typography } from '@mui/material';

function MyCard() {
  return (
    <Card sx={{ backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
      <CardContent>
        <Typography variant="h5" sx={{ fontFamily: 'Poppins, sans-serif', color: '#033043' }}>
          Card Title
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Nunito, sans-serif', color: '#212121' }}>
          This is a card description. It explains the content inside the card.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MyCard;