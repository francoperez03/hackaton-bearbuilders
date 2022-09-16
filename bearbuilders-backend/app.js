require("dotenv").config();
const logger = require("./utils/logger");
const auth = require("./utils/auth-middleware");
const cors = require("@fastify/cors");
const routes = require("./routes/reservation.routes.");
const swagger = require("./utils/swagger");
const fastify = require("fastify")(logger);
fastify.register(cors);
fastify.register(require("@fastify/swagger"), swagger.options);
fastify.addHook("preValidation", auth);

routes.forEach((route) => {
  fastify.route(route);
});

const start = async () => {
  try {
    console.log("a");
    await fastify.listen({ port: process.env.HTTP_PORT, host: "0.0.0.0" });
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
