const Product = require("../models/product.model");

const getProducts = async (req, reply) => {
  return await Product.find();
};

const getProductById = async ({ id }) => {
  return await Product.findById(id);
};

const saveProduct = async ({ params }) => {
  const product = new Product(params);
  return await product.save();
};

const updateProduct = async ({ id, params }) => {
  return await Product.findByIdAndUpdate(id, params, {
    new: true,
    runValidators: true,
  });
};

const deleteProduct = async ({ id }) => {
  await Product.findByIdAndDelete(id);
};

module.exports = {
  getProducts,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct,
};
