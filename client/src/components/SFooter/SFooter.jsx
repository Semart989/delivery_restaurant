import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import style from '../SFooter/SFooter.module.css'

function SFooter() {
  return (
    <>
      <div className={style.footer}>
        <Box>
          <Typography variant="body2" color="text.secondary"
            sx={{
              margin: 1,
              color: 'white'
            }}>
            <img className={style.icon1} src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="insta" width="7%"/>
            <img className={style.icon2} src="/img/icons/telegram.png" alt="telega" width="7%"/>
            <img className={style.icon3} src="/img/icons/whatsapp.png" alt="wassap" width="7%"/>
          </Typography>
          <Typography variant="body2" color="">
            8-800-2000-7007
          </Typography>
        </Box>
      </div>
    </>
  );
}
export default SFooter;
