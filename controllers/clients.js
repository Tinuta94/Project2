const express = require('express')
const clientsApi = require('../models/clients.js')
const clientRouter = express.Router()


clientRouter.get('/', function (req, res) {
  clientsApi.getClients()
    .then(clients => {
      res.render('clients/allClients', { clients })

    })
})


clientRouter.get('/new', function (req, res) {
  res.render('clients/createClient')
})

clientRouter.get('/:clientId', function (req, res) {
  clientsApi.getClient(req.params.clientId).then(client => {
    res.render('clients/singleClient', { client })
  })
})

clientRouter.get('/:clientId/edit', function (req, res) {
  clientsApi.getClient(req.params.clientId)
    .then(client => {
      res.render('clients/editClientForm', { client })
    })
})


clientRouter.post('/', function (req, res) {
  clientsApi.addClient(req.body)
    .then((addClient) => {
      res.redirect(`/homeScreen/${login._id}`)
    })
})

clientRouter.put('/:clientId', function (req, res) {
  clientsApi.updateClient(req.params.clientId, req.body)
    .then(() => {
      res.redirect('/homeScreen/${login._id}')
    })
})

clientRouter.delete('/:clientId', function (req, res) {
  clientsApi.deleteClient(req.params.clientId)
    .then((deletedClient) => {
      res.redirect('/homeScreen/${login._id}')
    })
})

module.exports = {
  clientRouter
}