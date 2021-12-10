import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function SFooter() {
  return (
    <>
      <Box
        sx={{
          // minWidth: 300,
          // minHeight: 100,
          backgroundColor: '#e9ecef',
        }}>
        <Typography variant="body1" color="text.primary" 
        sx={{
         margin: 2
        }}>
          Тут футер!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ссылочки на контакты или на что угодно
        </Typography>
      </Box>
    </>
  );
}
export default SFooter;
