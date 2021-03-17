"use strict"

const mongoose = require('mongoose');
const app = require('./App')
const config = require ("./config.js")


const port = config.port;



const uri = config.db;

mongoose.connect(uri, 
    {useNewUrlParser: true, useUnifiedTopology: true}
    )
        .then(() => console.log ('Database connesso'))
        .catch(e => console.log(e))



  
  app.listen(port, () => {
    console.log(`Running le mie prime API at http://localhost:${port}`)     // visualizzo in console
  })