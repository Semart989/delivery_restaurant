import { Card, CardContent, CardHeader, CardMedia, Typography, Button } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import styles from '../DishesItem/DishesItem.module.css'
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

function DishesItem({ dish }) {

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  // const categoryID = useSelector(state => state.dishes.categoryID)

  // console.log(categoryID)

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={styles.card}
      sx={{ maxWidth: 345, margin: 4 }}>
      {/* <Link to={`/categories/${categoryID}/${dish.id}`}> */}
        <CardHeader
          title={dish.name}
        />
        <CardMedia
          component="img"
          maxHeight="200"
          maxWidth="200"
          image={dish.picture}
          alt="Food"
        />
        <CardContent>
          <Typography variant="body1" color="text.primary">
            {dish.price} ₽
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {dish.description} 
          </Typography>
        </CardContent>
        <Button
          sx={{ margin: 1 }}
          variant="contained" color="success">
          Добавить
        </Button>


        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Состав"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Состав: {dish.ingredients}</Typography>
        </CardContent>
      </Collapse>
      {/* </Link> */}
    </Card>
  );
}

export default DishesItem;
