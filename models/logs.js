const mongoConfig = require('../config/mongoConfig');

async function writeLog(route, dateTime) {
  const log = new mongoConfig.Log({ route: route, dateTime: dateTime });
  await log.save();
}

module.exports = {
  writeLog
}