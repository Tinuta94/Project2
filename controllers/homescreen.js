const express = require('express')
const storesApi = require('../models/stores.js')
const clientsApi = require('../models/clients.js')
const productsApi = require('../models/products.js')

const homeScreenRouter = express.Router()


homeScreenRouter.get('/', (req, res) => {
    storesApi.getStores()
        .then(stores => {
            clientsApi.getClients()
                .then(clients => {
                    productsApi.getProducts()
                        .then(products => {
                            res.render('homescreen/allElements', {stores, clients, products})
                        })
                })
        })
    })
    module.exports = {
        homeScreenRouter
    }