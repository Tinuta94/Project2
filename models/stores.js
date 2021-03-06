const mongoose = require('./connection.js')

const StoreSchema = mongoose.Schema(
    {
        name: String,
        Address: String,
        currentlyOpen: Boolean,
        phoneNumber: String
    })

const StoreCollection = mongoose.model('Store', StoreSchema)

const createStore = () => {
    return StoreCollection.create({
        name: "Best Buy",
        Address: "1210 Caroline St NE",
        currentlyOpen: true,
        phoneNumber: 206 - 519 - 2635
    })
}

const getStores = () => { return StoreCollection.find() }

const getStore = (id) => { return StoreCollection.findById(id) }

const addStore = (storeNew) => { return StoreCollection.insertMany([storeNew]) }

const updateStore = (id, store) => {
    if (store.currentlyOpen === 'true') {
        store.currentlyOpen = true;
    } else {
        store.currentlyOpen = false;
    }
    return StoreCollection.findByIdAndUpdate(id, store)
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