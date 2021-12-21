import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Card, CardContent, CardMedia, Typography, Badge, ButtonGroup, Button, styled } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import cartAT from '../../redux/actionTypes/cartAT';
import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import styles from './CartView.module.css';
import CancelIcon from '@mui/icons-material/Cancel';

// кастомный бэйдж через метод {style} из MUI-styles
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 10,
    top: 14,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '13px 10px',
    borderRadius: '20px'
  },
}));

export default function CartView({ product }) {

  const dispatch = useDispatch();

  return (
    <Card
      className={styles.card}
      sx={{ 
        display: 'flex', 
        marginTop: '10px',
        marginBottom: '10px', 
        marginRight: 'auto', 
        marginLeft: 'auto', 
        borderRadius: '10px', 
        maxWidth: '600px' 
      }}
    >
      
      <StyledBadge badgeContent={product.quantity} color="secondary">
        <CardMedia
          component="img"
          sx={{ width: 150, margin: '10px', borderRadius: '10px' }}
          image={product.picture}
          alt="button"
        />
      </StyledBadge>
      

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column' 
        }}>
     
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {product.name}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary" component="div">
            Цена: {product.price}
          </Typography>
        </CardContent>

        <Box sx={{ display: 'flex', flexDirection: 'raw' }}>
          <ButtonGroup sx={{ paddingBottom: '10px', paddingLeft: '20px' }} >
            <Button
              aria-label="reduce"
              onClick={() => {

                dispatch({ type: cartAT.DECREMENT_CART, payload: product });

              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>

            <Button
              aria-label="increase"
              onClick={() => {
                dispatch({ type: cartAT.INCREMENT_CART, payload: product });
              }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>


          <Stack sx={{ paddingBottom: '10px' }} spacing={1}>
            <IconButton
              color="default"
              aria-label="delete"
              onClick={() => {
                dispatch({ type: cartAT.DELETE_ONE_POSITION, payload: product.id });
              }}>
              {/* <DeleteIcon /> */}
              <CancelIcon/>
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Card>
  );
}
