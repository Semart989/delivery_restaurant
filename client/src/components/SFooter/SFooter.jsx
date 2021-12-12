import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import style from '../SFooter/SFooter.module.css'

function SFooter() {
  return (
    <>
      <div className={style.footer}>
        <Box
          sx={{
            backgroundColor: '#1c79d0',
          }}>
          <Typography variant="body1" color="text.primary"
            sx={{
              margin: 2,
              color: 'white'
            }}>
            Тут футер!
          </Typography>
          <Typography variant="body2" color="text.secondary"
            sx={{
              margin: 2,
              color: 'white'
            }}>
            Ссылочки на контакты или на что угодно
          </Typography>
        </Box>
      </div>
    </>
  );
}
export default SFooter;
