const express = require('express')
const productsApi = require('../models/products.js')
const productRouter = express.Router()


productRouter.get('/', function (req, res) {
  productsApi.getProducts()
    .then(products => {
      res.render('products/allProducts', { products })

    })
})

productRouter.get('/new', function (req, res) {
  res.render('products/createProduct')
})

productRouter.get('/:productId', function (req, res) {
  productsApi.getProduct(req.params.productId).then(product => {
    res.render('products/singleProduct', { product })
  })
})

productRouter.get('/:productId/edit', function (req, res) {
  productsApi.getProduct(req.params.productId)
    .then(product => {
      res.render('products/editProductForm', { product })
    })
})


productRouter.post('/', function (req, res) {
  productsApi.addProduct(req.body)
    .then((addProduct) => {
      res.redirect('/homeScreen')
    })
})

productRouter.put('/:productId', function (req, res) {
  productsApi.updateProduct(req.params.productId, req.body)
    .then(() => {
      res.redirect('/homeScreen')
    })
})

productRouter.delete('/:productId', function (req, res) {
  productsApi.deleteProduct(req.params.productId)
    .then((deletedProduct) => {
      res.redirect('/homeScreen')
    })
})

module.exports = {
  productRouter
}