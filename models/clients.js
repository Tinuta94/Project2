const mongoose = require('./connection.js')

const ClientSchema = mongoose.Schema(
    {
        name: String,
        Address: String,
        Age: Number,
        Purchase: String,
        Date: Date
    })

const ClientCollection = mongoose.model('Client', ClientSchema)

const createClient = () => {
    return ClientCollection.create({
        name: "James Kim",
        Address: "432 Ponce de Leon Ave",
        Age: 32,
        Purchase: "Camera",
        Date: new Date()
    })
}

const getClients = () => { return ClientCollection.find() }

const getClient = (id) => { return ClientCollection.findById(id) }

const addClient = (clientNew) => { return ClientCollection.insertMany([clientNew]) }

const updateClient = (id, client) => {
    return ClientCollection.findByIdAndUpdate( id, client)
}

const deleteClient = (id) => { return ClientCollection.findByIdAndDelete(id) }

module.exports = {
    createClient,
    getClients,
    getClient,
    addClient,
    updateClient,
    deleteClient
}