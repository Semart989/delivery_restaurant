const express = require('express');
const fetch = require('node-fetch');
const {
  User,
} = require('../db/models');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    console.log('trying to login');
    const {
      roomid,
      pincode,
      phone,
    } = req.body;

    if (roomid) {
      
      const guestInfo = await fetch(`https://hotel-api-example.herokuapp.com/${roomid}`);
      const data = await guestInfo.json();
      console.log(data);
      if (data.guest) { 
        if (data.guest.pincode === pincode) {
          const user = await User.upsert({
            room: roomid,
            name: `${data.guest.firstname} ${data.guest.lastname}`,
            phone: data.guest.phone,
            pin: pincode,
          });

          req.session.user = {
            // id: data.guest.id,
            id: user[0].id,
            name: user[0].name,
            phone: user[0].phone,
            roomid: user[0].room,
            role: 'client',
            isAuth: true,
          };
          res.status(200).json({
            user: req.session.user,
            message: 'login complete',
          });
        } else {
          return res.status(200).json({
            user: false,
            message: 'wrong pin code',
          });
        }
      } 
      else {

      }
    } else { // попытка авторизации staff'a
      console.log('staff trying to login');
      const staffInfo = await fetch('https://hotel-api-example.herokuapp.com/staff');
      const data = await staffInfo.json();

      const staff = data.staff.filter((el) => el.pincode === pincode && +el.phone === +phone)[0];
      console.log(staff);
      if (staff) { // если нашелся такой сотрудник, то авторизовываем
        // const {
        //   id,
        // } = staff;
        // const name = `${staff.firstname} ${staff.lastname}`;
        // const {
        //   phone,
        // } = staff;
        // const {
        //   role,
        // } = staff;
        // const isAuth = true;

        req.session.user = {
          id: staff.id,
          name: `${staff.firstname} ${staff.lastname}`,
          phone: staff.phone,
          role: staff.role,
          isAuth: true,
        };
        res.status(200).json({
          user: req.session.user,
          message: 'login complete',
        });
      } else {
        return res.status(200).json({
          user: false,
          message: 'login failed',
        });
      }
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
