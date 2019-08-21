const express = require ('express')
const productsApi = require('../models/product.js')
const storesApi = require('../models/stores')
const homeScreenRouter = express.Router()


homeScreenRouter.get('/', (req, res) => {
    productsApi.getProducts()
        .then(allProducts => {
            storesApi.getStores()
                .then(allStores => {
                    res.render('homepage', {allStores, allProducts})
                })
        })
})