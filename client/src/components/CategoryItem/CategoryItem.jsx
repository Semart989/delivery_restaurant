import { Card, CardHeader, CardMedia } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../CategoryItem/CategoryItem.module.css'

function CategoryItem({ category }) {
  return (

    <Card className={styles.card}
      sx={{ maxWidth: 345, margin: 2, justifyContent: 'space-between', borderRadius: 3 }}>
      <Link to={`/categories/${category.id}`}
        className={styles.link}>
        <CardHeader
          title={category.name}
        />
        <CardMedia
          component="img"
          image={category.picture}
          alt="Food"
        />
      </Link>
    </Card>
  );
}

export default CategoryItem;
