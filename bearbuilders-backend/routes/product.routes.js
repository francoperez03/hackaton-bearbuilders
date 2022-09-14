const boom = require("boom");

const {
  getProducts,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct,
} = require("../services/product.service");

const routes = [
  {
    method: "GET",
    url: "/products",
    handler: async (req, reply) => {
      try {
        console.log(req.query);
        const products = await getProducts();
        reply.code(200).send(products);
      } catch (err) {
        throw boom.boomify(err);
      }
    },
    schema: {
      type: "object",
      properties: {
        foo: { type: "integer" },
        bar: { type: "string" },
      },
      required: ["foo"],
      additionalProperties: false,
    },
  },
  {
    method: "GET",
    url: "/products/:id",
    handler: async (req, reply) => {
      try {
        const products = await getProductById({ id: req.params.id });
        reply.code(200).send(products);
      } catch (err) {
        throw boom.boomify(err);
      }
    },
  },
  {
    method: "POST",
    url: "/products",
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
    method: "PUT",
    url: "/products/:id",
    handler: async (req, reply) => {
      try {
        const products = await updateProduct({
          id: req.params.id,
          params: req.body,
        });
        reply.code(200).send(products);
      } catch (err) {
        throw boom.boomify(err);
      }
    },
  },
  {
    method: "DELETE",
    url: "/products/:id",
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
