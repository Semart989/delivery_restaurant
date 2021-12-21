import React from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userInitAC } from '../../redux/actionCreators/userAC'


const Logout = () => {


  const dispatch = useDispatch()
  let history = useHistory();

  fetch('/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.logoutComplete){
          dispatch(userInitAC({}));
          history.push("/login");
        }else{
          alert('logout failed')
        }
      })
  
  return (
    <>
      
    </>
  )
}

export default Logout
