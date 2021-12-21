import React from 'react';
import style from '../CallButton/CallButton.module.css'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

function CallButton(props) {
  return (
    <div className={style.phonecall}>
      <a href="tel:+79814080769" className={style.phone}>
        <PhoneAndroidIcon />
      </a>
    </div>
  );
}

export default CallButton;
