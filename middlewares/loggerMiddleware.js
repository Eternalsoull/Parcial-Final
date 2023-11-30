const fs = require('fs');
const moment = require('moment');

const FILE_NAME_ACCESS = "./db/log.json";

function loggerMiddleware(req, res, next) {
    
    const logEntry = `[${getCurrentTimestamp()} [${req.method}] ${req.path} ]  \n`;
  fs.appendFile(FILE_NAME_ACCESS, logEntry, (err) => {
    if (err) {
      console.error('Error al escribir en el archivo de registro:', err);
    }
  });

  next();
}

function getCurrentTimestamp() {
  return moment().format('YYYY/MM/DD HH:mm');
}

module.exports = loggerMiddleware;