const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const orderController = require('../controllers/orderController');

// Rutas de usuario
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);

// Rutas de productos
router.get('/products', productController.getAllProducts);
router.post('/products', productController.createProduct);

// Rutas de órdenes
router.get('/orders', orderController.getAllOrders);
router.post('/orders', orderController.createOrder);

module.exports = router;
