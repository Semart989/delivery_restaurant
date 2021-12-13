import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { userInitAC } from '../../redux/actionCreators/userAC';
// import { useEffect } from 'react';

function LoginWrapper({children}) {
  
  //const state = useSelector(state => state);
  //console.log(state.isUserAuth);
  // const dispatch = useDispatch();

  // useEffect(() => {
    // fetch('http://localhost:5000/isauth', {
    //   method: 'GET',
    //   credentials: 'include',
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     if (data.user) {
    //       dispatch(userInitAC(data.user));
    //     }
    //   })
  // }, []);

  return (
    <>
      {children}
    </>
  );
}

export default LoginWrapper;
