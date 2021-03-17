"use strict"
const express = require ('express');
const api = express.Router()
const productCtrl = require('../controllers/product')
const auth = require ('../middlewares/auth')
const userCtrl = require ('../controllers/user')

// rotta.metodo("/rotta2",controller.funzione)
api.get('/product', productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', productCtrl.saveProduct)
api.put('/product/:productId', productCtrl.updateProduct)
api.delete('/product/:productId', productCtrl.deleteProduct)

// rotte per registrazione e login:

api.post ('/signup', userCtrl.signUp)
api.post ('/signin', userCtrl.signIn)

// rotta di prova per verificare autenticazione:

api.get('/private', auth,  ( req, res) => {
    res.status(200).send({message : 'Access Permitted'})
})


module.exports = api



