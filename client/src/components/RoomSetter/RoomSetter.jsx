import React from 'react';
import { useCookies } from 'react-cookie';
import { Redirect, useParams } from 'react-router';

function RoomSetter() {
  const { roomid } = useParams();
  const [cookies, setCookie] = useCookies(['roomid']);
  let expires = new Date()
  expires.setTime(expires.getTime() +  24 * 60 * 60 * 1000);//на сутки кука
  setCookie('roomid', roomid, { path: '/',  expires});
  console.log(cookies);

  return (
    <Redirect to="/login" />
  );
}

export default RoomSetter;
