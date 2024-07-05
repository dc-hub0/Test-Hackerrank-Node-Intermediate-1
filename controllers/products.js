const ProductServices = require('../services/products');
const service = new ProductServices();

// fetch all products
async function getProducts(req, res) {
  const products = await service.fetchAll();
  res.send(products);
}

// Create single product
async function createProduct(req, res) {
  const product = await service.create(req.body);
  res.status(201).send(product);
}

//  patch a product
async function pactchProduct(req, res) {
  const { id } = req.params;
  let product = await service.findById(id);
  const criterias = service.checkCriteria(product);
  if (criterias.length > 0) {
    res.status(422).send(criterias);
  } else {
    await service.update(product, { isPublished: true });
    res.status(204).send();
  }
}

// Delete a Product
function deleteProduct(req, res) {
  res.status(405).send();
}

module.exports = { getProducts, createProduct, pactchProduct, deleteProduct };
