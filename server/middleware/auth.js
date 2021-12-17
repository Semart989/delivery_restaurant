module.exports = (req, res, next) => {
  console.log('checking Auth status');
  console.log(req.url);
  if (req.session?.user?.isAuth || req.url === '/login' || req.url === '/staff' || req.url === '/logout') {
    next();
  } else {
    const match = req.url.match(/room\/(\d+)/);
    const isRoomPage = !!match;
    if(isRoomPage){
      const roomid = match[1];
      res.cookie('roomid', roomid, { maxAge: 24*60*60*1000 });
    }
    console.log('cookie set');
    //res.send({ redirect: '/login', message: "need to login first" });
    res.redirect(301, '/login');
  }
};
