const Products = require('../models/products');
const criterias = require('../utils/criteria');

class ProductServices {
  constructor() {}

  async fetchAll() {
    return await Products.findAll({ order: ['id'] });
  }

  async findById(id) {
    return await Products.findByPk(id);
  }

  async create(produtData) {
    return await Products.create({ ...produtData, isPublished: false });
  }
  async update(product, modifications) {
    await product.update({ ...modifications });
    await product.save();
    return product;
  }
  checkCriteria(product) {
    return criterias.checkCriterias(product);
  }
}

module.exports = ProductServices;
