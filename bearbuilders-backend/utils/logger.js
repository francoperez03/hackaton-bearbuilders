const { v4: uuid } = require("uuid");

module.exports = {
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname",
      },
    },
  },
  genReqId: (req) => req.headers["x-request-id"] || uuid(),
  disableRequestLogging: true,
};
