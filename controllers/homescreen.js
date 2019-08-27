const express = require('express')
const storesApi = require('../models/stores.js')
const clientsApi = require('../models/clients.js')
const productsApi = require('../models/products.js')
const loginsApi = require('../models/login.js')
const homeScreenRouter = express.Router()

// '/homeScreen/{{login.name}}' or homeScreen/login{{_id}}{{name}}  
homeScreenRouter.get('/', (req, res) => {
    loginsApi.getLogins(req.body.name)
    .then(logins => {
    storesApi.getStores()
        .then(stores => {
            clientsApi.getClients()
                .then(clients => {
                    productsApi.getProducts()
                        .then(products => {
                            res.render('homescreen/allElements', {stores, clients, products, logins})
                        })
                })
        })
    })
})
    module.exports = {
        homeScreenRouter
    }