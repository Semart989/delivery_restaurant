const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/:room', async (req, res) => {


  
  const room = +req.params.room

  try {
    const guestInfo = await fetch(`https://hotel-api-example.herokuapp.com/${room}`);
    const data = await guestInfo.json();
    return res
      .status(200)
      .json({
        message: 'Ок',
        data: data
      })
  }
  catch (error) {
    return res
      .status(200)
      .json({
        message: 'Not Ок',
        data: error
      })
  }
});

module.exports = router;