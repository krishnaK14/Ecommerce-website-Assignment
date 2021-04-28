const express=require('express');
const router=express.Router();


const {getAllProducts,getProductById} = require('../controller/productControllers');

//@desc         Get all products from db
//@route        GET /api/products
//@access       public
router.get('/',getAllProducts);


//@desc         Get single product from db
//@route        GET /api/products/:id
//@access       public
router.get('/:id',getProductById);


module.exports=router;