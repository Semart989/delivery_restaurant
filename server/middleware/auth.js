module.exports = (req, res, next) => {
  console.log('checking Auth status');
  if (req.session?.user?.isAuth || req.url === '/login' || req.url === '/staff' || req.url === '/logout') {
    next();
  } else {
    res.send({ redirect: '/login', message: "need to login first" });
  }
};
