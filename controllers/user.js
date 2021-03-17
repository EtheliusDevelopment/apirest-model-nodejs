"use strict"
const User = require ('../models/users');
const service = require ('../services/index')



function signUp(req, res){
    const user = new User ({            //salvo dati nel db
        email : req.body.email,
        displayName : req.body.displayName,
        password : req.body.password
    })
    user.save((err) => {
        console.log(req.body)
        if (err) res.status(500).send({message : `Internal Server error ${err}`})
        return res.status(200).send({token : service.createToken(user) })
    })

}

function signIn(req, res){
    User.findOne ({email : req.body.email}, (err, user) => {
        if ( !user ) return res.status(404).send({message : `User does not exist`})
        if (err) return res.status(500).send({message : err})

        req.user = user
        res.status(200).send({
            message : ` Correct Login`,
            token : service.createToken(user)
        })
    })
}



module.exports = {
    signUp,
    signIn

}
