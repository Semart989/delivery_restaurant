import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useCookies } from 'react-cookie';
import { userInitAC } from '../../redux/actionCreators/userAC';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useState } from 'react';

function LoginPage(props) {
  const [cookies] = useCookies(["roomid"]);
  const roomid = cookies.roomid;

  let history = useHistory();
  const dispatch = useDispatch();
  
  const [error, setError] = useState(false);
  const [errortext, setErrorText] = useState('Неверный pincode');

  const loginOnSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const body = {
      roomid,
      phone: data.get('phone'),
      pincode: data.get('pincode'),
    };
    fetch('http://localhost:4000/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(true);
          setErrorText(data.error);
        } else {
          if(data.user){
            dispatch(userInitAC(data.user));
            history.push('/');
          }else{
            console.log('error set to false!');
            setError(true);
          }
        }
      })
  }


  return (
    <>
      {roomid ?
        <div>
          <br />
          <Typography variant="h5">Введите ваш номер телефона и PinCode, выданный на ресепшне</Typography>
          <br />
          <form onSubmit={loginOnSubmit}>
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="phone"
              variant="outlined"
              name="phone"
            />
            <br />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="pincode"
              variant="outlined"
              name="pincode"
            />
            <br />
            <Button type="submit" variant="contained" color="primary">
              Авторизоваться
            </Button>
          </form>
          { error && <div id="errorBlock" className="highLightError">{errortext}</div>}
        </div>
        :
        <div>Используйте QR код для входа</div>
      }
    </>
  );
}

export default LoginPage;
