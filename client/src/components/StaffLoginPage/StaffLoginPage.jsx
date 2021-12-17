import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { userInitAC } from '../../redux/actionCreators/userAC';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function LoginPage(props) {

  let history = useHistory();
  const dispatch = useDispatch();

  const [error, setError] = useState(false);
  const [errortext, setErrorText] = useState('Неверные данные для входа');

  const loginOnSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const body = {
      phone: data.get('phone'),
      pincode: data.get('pincode'),
    };
    fetch('/login', {
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
            if(data.user.role === 'manager'){
              history.push('/admin');
            }else if(data.user.role === 'cookmaster'){
              history.push('/cookmaster');
            }
          }else{
            setError(true);
          }
        }
      })
  }


  return (
    <div>
      <br />
      <Typography variant="h6">Форма для авторизации персонала ресторана</Typography>
      <Typography variant="h6">Введите ваш номер телефона и PinCode</Typography>
      <br />
      <form onSubmit={loginOnSubmit}>
        <TextField
          style={{ width: "163px", margin: "5px" }}
          type="text"
          label="phone"
          variant="outlined"
          name="phone"
        />
        <br />
        <TextField
          style={{ width: "163px", margin: "5px" }}
          type="text"
          label="pincode"
          variant="outlined"
          name="pincode"
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Авторизоваться
        </Button>
        { error && <div id="errorBlock" className="highLightError">{errortext}</div>}
      </form>
    </div>
  );
}

export default LoginPage;
