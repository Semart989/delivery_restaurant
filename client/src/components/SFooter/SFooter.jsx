import * as React from 'react';
import Box from '@mui/material/Box';
import style from '../SFooter/SFooter.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function SFooter() {
  return (
    <>
      <div className={style.footer}>
        <Box className={style.icons}>
          <InstagramIcon
          className={style.icon} 
          onClick={() => window.location.assign('https://www.instagram.com')}/>
          <TelegramIcon
          onClick={() => window.location.assign('https://web.telegram.org/')}
          className={style.icon} />
          <WhatsAppIcon 
          onClick={() => window.location.assign('https://www.whatsapp.com/')}
          className={style.icon} />
        </Box>
      </div>
    </>
  );
}
export default SFooter;
