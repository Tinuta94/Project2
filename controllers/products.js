const express = require ('express')
const productsApi = require ('../models/product.js')
const productRouter = express.Router()


productRouter.get('/', function(req, res) {
    productsApi.getProducts()
      .then(products => {
        res.render('allProducts', {products})
        
      })
  })

productRouter.get('/new', function(req, res) {
      res.render('createProduct')
})
  
productRouter.get('/:productId', function(req,res) {
    productsApi.getProduct(req.params.productId).then(product => {
        res.render('singleProduct', {product})
    })
})

productRouter.get('/:productId/edit', function(req,res){
  productsApi.getProduct(req.params.productId)
  .then(product => {
      res.render('editProductForm', {product})
    })
})


  productRouter.post('/', function(req, res){
    productsApi.addProduct(req.body)
      .then((addProduct) => {
        res.redirect('/products/')
      })
  })

  productRouter.put('/:productId', function(req,res){
    productsApi.updateProduct(req.params.productId, req.body)
      .then(() => {
        res.redirect('/products/')
      })
  })

  productRouter.delete('/:productId', function(req,res){
    productsApi.deleteProduct(req.params.productId)
      .then((deletedProduct) => {
        res.redirect('/products/')
      })
  })
  
  module.exports = {
      productRouter
  }