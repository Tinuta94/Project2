const mongoose = require('./connection.js')

const LoginSchema = mongoose.Schema(
    {
        name: String,
        password: Number
    })

const LoginCollection = mongoose.model('Login', LoginSchema)

const createLogin = () => {
    return LoginCollection.create({
        name: "Tina",
        password: 1111
    })
}
const getLogins = () => { return LoginCollection.find() }
const getLogin = (id) => { return LoginCollection.findById(id) }

const addLogin = (loginNew) => { return LoginCollection.insertMany([loginNew]) }

const updateLogin = (id, login) => {
    return LoginCollection.findByIdAndUpdate( id, login)
}

const deleteLogin = (id) => { return LoginCollection.findByIdAndDelete(id) }

const getLoginByPassword = (password) => {
    return LoginCollection.findOne({ password })
}

module.exports = {
    createLogin,
    getLogins,
    getLogin,
    addLogin,
    updateLogin,
    deleteLogin,
    getLoginByPassword
}