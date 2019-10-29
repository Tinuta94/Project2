const express = require('express')
const storesApi = require('../models/stores.js')
const clientsApi = require('../models/clients.js')
const productsApi = require('../models/products.js')
const homeScreenRouter = express.Router()

homeScreenRouter.get('/', (req, res) => {
    productsApi.getProducts()
        .then(products => {
            storesApi.getStores()
                .then(stores => {
                    clientsApi.getClients()
                        .then(clients => {
                            res.render('homescreen/allElements', { products, stores, clients })
                        })
                })
        })
})
module.exports = {
    homeScreenRouter
}