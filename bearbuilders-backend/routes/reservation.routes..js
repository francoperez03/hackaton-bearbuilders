const boom = require("boom");

const {
  getReservations,
  getReservationById,
} = require("../services/reservation.service");

const routes = [
  {
    method: "GET",
    url: "/reservations",
    handler: async (req, reply) => {
      try {
        console.log(req.query);
        const bookings = await getReservations();
        reply.code(200).send(bookings);
      } catch (err) {
        throw boom.boomify(err);
      }
    },
  },
  {
    method: "GET",
    url: "/reservations/:id",
    handler: async (req, reply) => {
      try {
        const products = await getReservationById({ id: req.params.id });
        reply.code(200).send(products);
      } catch (err) {
        throw boom.boomify(err);
      }
    },
  },
  {
    method: "POST",
    url: "/reservation/buy",
    handler: async (req, reply) => {
      try {
        const product = await saveProduct({ params: req.body });
        reply.code(201).send(product);
      } catch (err) {
        throw boom.boomify(err);
      }
    },
  },
  {
    method: "POST",
    url: "/reservation/sell",
    handler: async (req, reply) => {
      try {
        const product = await saveProduct({ params: req.body });
        reply.code(201).send(product);
      } catch (err) {
        throw boom.boomify(err);
      }
    },
  },
  {
    method: "DELETE",
    url: "/reservations/:id",
    handler: async (req, reply) => {
      try {
        await deleteProduct({ id: req.params.id });
        reply.code(204).send();
      } catch (err) {
        throw boom.boomify(err);
      }
    },
  },
];

module.exports = routes;
