const express = require('express')
const loginsApi = require ('../models/login.js')
const loginRouter = express.Router()

loginRouter.get('/', function(req, res) {
    loginsApi.getLogins()
      .then(logins => {
        res.render('login/alllogins', {logins})
        
      })
  })
//   loginRouter.get('/new', function(req, res) {
//     res.render('login/createLogin')
// })

// loginRouter.get('/:loginId', function(req,res) {
//   loginsApi.getLogin(req.params.loginId).then(login => {
//       res.render('login/singleLogin', {login})
//   })
// })

loginRouter.post('/', function(req, res) {
    if(req.body.password === '1111') {
        res.redirect('/homescreen/')
    } else {
        res.redirect('/login/')
    }
        })

module.exports = {
    loginRouter
}