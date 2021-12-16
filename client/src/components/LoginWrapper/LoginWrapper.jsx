import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userInitAC } from '../../redux/actionCreators/userAC';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

function LoginWrapper({ children }) {

  const state = useSelector(state => state);
  //console.log(state.isUserAuth);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    const path = window.location.pathname;
    if (path !== '/login' && path !== '/staff' && path !== '/logout') {
      fetch('http://localhost:4000/isauth', {
        method: 'GET',
        credentials: 'include',
      })
        .then(res => res.json())
        .then(data => {
          if (data.user) {
            dispatch(userInitAC(data.user));
          }
          if (data.redirect) {
            history.push('/login');
          }
        })
    }
  }, []);

  return (
    <>
      {children}
    </>
  );
}

export default LoginWrapper;
