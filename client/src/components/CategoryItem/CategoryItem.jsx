import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function CategoryItem({category}) {

  return (
    <Card 
    sx={{ maxWidth: 345, margin: 4}}>
      <Link to={`/categories/:${category.id}`}>
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
 Текст
        </Typography>
      </CardContent>
      </Link>
    </Card>
  );
}

export default CategoryItem;
