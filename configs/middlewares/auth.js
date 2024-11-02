const isLogin = (req, res, next) => {
  res.locals.userLogin = null;
  if (req.session.isAuth) {
    res.locals.userLogin = req.session.userLogin;
  }
  next();
};
