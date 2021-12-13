import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CategoryItem/CategoryItem.module.css'

function CategoryItem({ category }) {

  return (
    <Card className={styles.card}
      sx={{ maxWidth: 345, margin: 4, display: 'flex', justifyContent: 'space-between'}}>
      <Link to={`/categories/${category.id}`}
        className={styles.link}>
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
      </Link>
    </Card>
  );
}

export default CategoryItem;
