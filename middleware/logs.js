const logsModel = require('../models/logs');

async function logAccessRoute(req, res, next) {
  const dateTime = new Date();
  logsModel.writeLog(req.originalUrl, dateTime.toString());
  next();
}

module.exports = {
  logAccessRoute
}