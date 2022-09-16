const boom = require("boom");

const {} = require("../services/product.service");

const routes = [
  {
    method: "GET",
    url: "/attendaces/:id",
    handler: async (req, reply) => {
      try {
        console.log(req.query);
        const bookings = await getBookings();
        reply.code(200).send(bookings);
      } catch (err) {
        throw boom.boomify(err);
      }
    },
  },
];

module.exports = routes;
