import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
          <InstagramIcon />
          <TelegramIcon />
          <WhatsAppIcon />
          <PhoneAndroidIcon />
          8-800-2000-7007
        </Box>
      </div>
    </>
  );
}
export default SFooter;
