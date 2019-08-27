const express = require('express')
const storesApi = require('../models/stores.js')
const clientsApi = require('../models/clients.js')
const productsApi = require('../models/products.js')
const loginsApi = require('../models/login.js')
const homeScreenRouter = express.Router()

homeScreenRouter.get('/:loginId', (req, res) =>
    loginsApi.getLogin(req.params.loginId).then(login =>
        storesApi.getStores().then(stores =>
            clientsApi.getClients().then(clients =>
                productsApi.getProducts().then(products => {
                    console.log(login)
                    res.render('homescreen/allElements', { stores, clients, products, login })
                })
            ))))

module.exports = {
    homeScreenRouter
}