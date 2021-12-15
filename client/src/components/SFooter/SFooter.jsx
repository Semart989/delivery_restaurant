import * as React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import style from '../SFooter/SFooter.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

function SFooter() {
  return (
    <>
      <div className={style.footer}>
        <Box className={style.icons}>
          <InstagramIcon 
          sx={{weight: 150}}
          className={style.icon}/>
          <TelegramIcon className={style.icon}/>
          <WhatsAppIcon className={style.icon}/>
          <PhoneAndroidIcon className={style.icon}/>
        </Box>
      </div>
    </>
  );
}
export default SFooter;
