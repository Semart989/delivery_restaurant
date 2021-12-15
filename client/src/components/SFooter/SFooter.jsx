import * as React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import style from '../SFooter/SFooter.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
// import { Link } from 'react-router-dom'

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
          {/* <a href="tel:+79992191259" className={style.icon}>
            <PhoneAndroidIcon
          /></a> */}
        </Box>
      </div>
    </>
  );
}
export default SFooter;
