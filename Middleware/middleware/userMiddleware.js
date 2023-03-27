module.exports = appFilter = (req, res, next) => {
  if (!req.body.id) {
    res.send("can't find");
  } else if (req.body.id < 18 & req.body.id < 45) {
    res.send("don't allow you");
  } else {
    next();
  }
};
