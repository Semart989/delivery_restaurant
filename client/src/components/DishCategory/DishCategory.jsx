import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function DishCategory() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Пицца"
      />
      <CardMedia
        component="img"
        height="250"
        image="https://www.retail.ru/upload/medialibrary/527/pitstsar.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Вкусная сочная пиццаа
        </Typography>
      </CardContent>
    </Card>
  );
}
