const express = require('express')
const storesApi = require('../models/stores.js')
const storeRouter = express.Router()


storeRouter.get('/', function (req, res) {
    storesApi.getStores()
        .then(stores => {
            res.render('stores/allStores', {stores})

        })
})


storeRouter.get('/new', function (req, res) {
    res.render('stores/createStore')
})

storeRouter.get('/:storeId', function (req, res) {
    storesApi.getStore(req.params.storeId).then(store => {
        res.render('stores/singleStore', {store})
    })
})

storeRouter.get('/:storeId/edit', function (req, res) {
    storesApi.getStore(req.params.storeId)
        .then(store => {
            res.render('stores/editStoreForm', {store})
        })
})


storeRouter.post('/', function (req, res) {
    storesApi.addStore(req.body)
        .then((addStore) => {
            res.redirect('/stores/')
        })
})

storeRouter.put('/:storeId', function (req, res) {
    storesApi.updateStore(req.params.storeId, req.body)
        .then(() => {
            res.redirect('/stores/')
        })
})

storeRouter.delete('/:storeId', function (req, res) {
    storesApi.deleteStore(req.params.storeId)
        .then((deletedStore) => {
            res.redirect('/stores/')
        })
})

module.exports = {
    storeRouter
}

