const router = require('express').Router();

const controller = require('../controllers/products');

router.get('/', controller.getProducts);
router.post('/', controller.createProduct);
router.patch('/:id', controller.pactchProduct);
router.delete('/:id', controller.deleteProduct);
router.put('/:id', controller.deleteProduct);

module.exports = router;
