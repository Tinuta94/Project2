const mongoose = require('./connection.js')

const StoreSchema = mongoose.Schema(
    {
       name: String,
       Address: String,
       currentlyOpen: Boolean,
       phoneNumber: Number
    })

const StoreCollection = mongoose.model('Store', StoreSchema)

const createStore = () => {
    return StoreCollection.create({
        name: "Best Buy",
        Address: "1210 Caroline St NE",
        currentlyOpen: true,
        phoneNumber: 234567321
    })
}

const getStores = () => { return StoreCollection.find() }

const getStore = (id) => { return StoreCollection.findById(id) }

const addStore = (storeNew) => { return StoreCollection.insertMany([storeNew]) }

const updateStore = (id, store) => {
    return StoreCollection.findByIdAndUpdate( id, store)
}

const deleteStore = (id) => { return StoreCollection.findByIdAndDelete(id) }

module.exports = {
    createStore,
    getStores,
    getStore,
    addStore,
    updateStore,
    deleteStore
}