"use strict"
const Product = require ('../models/product');

function getProduct (req, res) {
    let productId = req.params.productId

    Product.findById(productId,(err, product)=>{

      if (!product) return res.status(404).send({message : 'Product does not exist'});
      if (err) return res.status(500).send({message : 'Internal server error'});

      res.status(200).send({product : product})
    })
      
 

}

function getProducts(req, res) {
    Product.find({}, (err, products) => {
        if (!products) return res.status(404).send({message : 'Products do not exist'});
        if (err) return res.status(500).send({message : 'Internal server error'});
  
        res.status(200).send({products : products})
  
      }) 

}

function saveProduct (req, res) {
    console.log("POST /Api/Product")
    console.log(req.body)

    let product = new Product()   // chiamo lo schema di dati creato con mongoose

    product.name = req.body.name        // chiamo i dati
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    // immagazino i dati nel db
    product.save((err, productStored) => {
        if (err) res.status(500).send({message : `errore nel salvataggio dei dati nel DB ${err}`})

        res.status(200).send({product : productStored})

    })    

}

function updateProduct (req, res) {
    let productId = req.params.productId
    let update = req.body
    Product.findByIdAndUpdate(productId, update, (err, productUpdated) =>{
      if (err) res.status(500).send({message : "Internal server error"})
  
      res.status(200).send({product : productUpdated})
    })

}

function deleteProduct (req, res) {
    let productId = req.params.productId
  Product.findById(productId, (err, product) =>{
    if (!product) return res.status(404).send({message : 'Product does not exist'});
    if (err) return res.status(500).send({message : 'Internal server error'});

    product.remove(err =>{
      if (err) return res.status(500).send({message : 'internal server error'})
      res.status(200).send({message: 'the product has been deleted'})
    })
  })

}


module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}
