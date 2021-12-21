import React from 'react';

import { Card, CardContent, CardMedia, Typography, Box, Badge, CardHeader } from '@mui/material';
import { styled } from '@mui/material/styles';


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


function MyOrderItem({ order }) {

  // форматируем дату создания заказа из поля createdAt в БД в формат ГГГГ-ММ-ДД ЧАСЫ:МИНУТЫ
  const date = order[0]['Orders.createdAt'].replace(/[a-zA-Z]/g, ' ').slice(0, 16)

  return (

    <Card
      sx={{
        borderRadius: '10px',
        marginTop: '10px',
        marginBottom: '10px',
        marginRight: '10px',
        marginLeft: '10px',
      }}>

      <CardHeader
        title={`№ заказа ${order[0]['Orders.id']}`}
        subheader={date}
      />


      {order.map((dish) => {
        return (
          <Card

            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginTop: '10px',
              marginBottom: '10px',
              marginRight: '10px',
              marginLeft: '10px',
              borderRadius: '10px',
            }}>

            <StyledBadge badgeContent={dish['Orders.Order_Dish.quantity']} color="secondary">
              <CardMedia
                component="img"
                sx={{ width: 150, margin: '10px', borderRadius: '10px' }}
                image={dish.picture}
                alt="button"
              />
            </StyledBadge>

            <Box sx={{
              display: 'flex',
              flexDirection: 'column'
            }}>

              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  {dish.name}
                </Typography>

                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Цена за шт {dish.price}₽
                </Typography>
              </CardContent>

            </Box>
          </Card>
        )
      })}
      <Typography variant="h6" color="text.secondary" component="div">
        ИТОГО: {order[0]['Orders.totalSum']} ₽
      </Typography>

    </Card>
  );
}

export default MyOrderItem;
