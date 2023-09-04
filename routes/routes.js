
const express = require('express');
const AllApiData = require('../controller/product')

const server = express();
const router = express.Router();

router.get('/product/:id', AllApiData.getAllProduct)
    .get('/product/GetAll', AllApiData.getProduct)
    .get('/product/sendMail', AllApiData.sendMail)
    .post('/product', AllApiData.addProduct)
    .put('/product/:id', AllApiData.replaceData)
    .delete('/product/:id', AllApiData.deleteData)

exports.router = router;