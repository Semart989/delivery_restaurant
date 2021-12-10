module.exports = (res, req, next) => {
  if (req.session.isAuth) {
    next();
  } else {
    res.redirect('/login');
  }
};
