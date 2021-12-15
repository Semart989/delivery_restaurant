const express = require('express');

const router = express.Router();

router.route('/')
  .post((req, res, next) => {
    try {
      req.session.destroy((err) => {
        if (err) {
          return next(err);
        }
        res.clearCookie('user_sid');
        res.json({ logoutComplete: true, isAuth: false, user: false });
      });
    } catch {
      res.json({ logoutComplete: false });
    }
  });

module.exports = router;
