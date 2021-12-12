import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';

function CategoryItem(props) {
  return (
    <Card sx={{ maxWidth: 345, margin: 4}}>
      <CardHeader
        title="Пицца"
      />
      <CardMedia
        component="img"
        maxHeight="200"
        maxWidth="200"
        image="https://www.retail.ru/upload/medialibrary/527/pitstsar.jpg"
        alt="Food"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Вкусная сочная пицца
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CategoryItem;
