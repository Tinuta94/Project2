const mongoose = require('./connection.js')

const ProductSchema = mongoose.Schema(
    {
        name: String,
        price: Number,
        brand: String
    })

const ProductCollection = mongoose.model('Product', ProductSchema)

const createProduct = () => {
    return ProductCollection.create({
        name: Camera,
        price: 300,
        brand: Canon
    })
}

const getProducts = () => { return ProductCollection.find() }

const getProduct = (id) => { return ProductCollection.findById(id) }

const addProduct = (productNew) => { return ProductCollection.insertMany([productNew]) }

const updateProduct = (id, product) => {
    return ProductCollection.findByIdAndUpdate( id, product)
}

const deleteProduct = (id) => { return ProductCollection.findByIdAndDelete(id) }

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}