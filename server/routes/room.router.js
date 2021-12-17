const router = require('express').Router();

router.get('/:roomid', (req,res)=>{
  const { roomid } = req.params;
  res.cookie('roomid', roomid, { maxAge: 24*60*60*1000 });
  console.log(roomid);
  console.log(11111111);
  res.redirect(301, '/login');
});

// router.put('/:id', statusOrder);


module.exports = router;
