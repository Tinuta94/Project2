const express = require('express')
const loginsApi = require ('../models/login.js')
const loginRouter = express.Router()

loginRouter.get('/', function(req, res) {
    loginsApi.getLogins()
      .then(logins => {
        res.render('login/alllogins', {logins})
        
      })
  })

loginRouter.post('/', function(req, res) {
    console.log(req.body)
    if(req.body.password === '1111') {
        res.redirect('/homescreen/')
    } else {
        res.redirect('/login/')
    }
        })

module.exports = {
    loginRouter
}