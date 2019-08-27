const express = require('express')
const loginsApi = require('../models/login.js')
const loginRouter = express.Router()

loginRouter.get('/', function (req, res) {
    loginsApi.getLogins()
        .then(logins => {
            res.render('login/alllogins', { logins })

        })
})

loginRouter.post('/', function (req, res) {
    console.log(req.body)
    loginsApi.getLoginByPassword(req.body.password).then(login => {
        if (!login) {

            res.redirect('/login/')
        } else {

            loginsApi.updateLogin(login._id, req.body).then(() => {
                res.redirect(`/homeScreen/${login._id}`)
            })
        }
    })

})
module.exports = {
    loginRouter
}