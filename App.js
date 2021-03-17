"use strict"
const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
const api = require ('./router/index');
const exphbs  = require('express-handlebars');

//CONFIGURAZIONE BODY - PARSER
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//CONFIGURAZIONE HANDLEBARS - VIEW TEMPLATE
// app.engine('handlebars', exphbs()); indica che i file con estensione handlebars vanno elaborati con exphbs
app.engine('.hbs', exphbs({          //cambiamo l'estensione da hanlebars a hbs per velocita'
    defaultLayout : 'default',
    extname : '.hbs'
}));   
app.set('view engine', '.hbs');

//CONFIGURO ROTTA E VISTA PER IL VIEW ENGINE
app.get('/login', (req, res)=>{
    res.render('login') // indico la pagina in views che voglio renderizzare
})


//CONFIGURAZIONE ROUTER
app.use('/api', api)









// module.exports = app