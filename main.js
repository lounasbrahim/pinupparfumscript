var request = require("request");
const winston = require("winston");

var myFormat = winston.format.combine(
  winston.format.timestamp({
    format: "YYYY-MM-DD HH:mm:ss",
  }),
  winston.format.json()
);

const logger = winston.createLogger({
  level: "info",
  format: myFormat,
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "infos.log" }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

request(
  {
    uri: "http://pinupparfum.fr/modules/ps_reminder/cron.php?secure_key=UDAPIESARKKIX2RT",
  },
  function (error, response, body) {
    logger.info("url: ", response.request.uri.href);
    logger.info("statusCode: ", response.statusCode);
    logger.info("statusMessage", response.statusMessage);
  }
);
