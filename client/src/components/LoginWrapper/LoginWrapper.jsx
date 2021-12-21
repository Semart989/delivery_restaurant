import React from 'react';
import { useDispatch } from 'react-redux';
import { userInitAC } from '../../redux/actionCreators/userAC';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

function LoginWrapper({ children }) {

  // const state = useSelector(state => state);
  //console.log(state.isUserAuth);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    const path = window.location.pathname;
    if (path !== '/login' && path !== '/staff' && path !== '/logout') {
      fetch('/isauth', {
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
  }, [dispatch, history]);

  return (
    <>
      {children}
    </>
  );
}

export default LoginWrapper;
