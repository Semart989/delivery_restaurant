import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';

function CategoryItem({category}) {

  // console.log(category.picture);

  return (
    <Card sx={{ maxWidth: 345, margin: 4}}>
      <CardHeader
        title={category.name}
      />
      <CardMedia
        component="img"
        maxHeight="200"
        maxWidth="200"
        image={category.picture}
        alt="Food"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {category.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CategoryItem;
