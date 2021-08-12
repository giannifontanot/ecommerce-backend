const {Product} = require('../../models/index');
const router = require('express').Router();

router.get('/', async (req, res) => {

    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (e) {
        console.log("---> e :" + e);

    }

});

router.get('/:product_name', async (req, res) => {
    try {
        const product = await Product.findOne({where: {product_name: req.params.product_name}});
        res.status(200).json(product);
    } catch (e) {
        console.log("---> e :" + e);
    }

});

router.post('/', async (req, res) => {
    try {
        const newProduct = await Product.create({
            product_name: req.body.product_name,
            price: req.body.price,
            stock: req.body.stock,
            category_id: req.body.category_id
        });
        res.status(200).json(newProduct);
    } catch (e) {
        res.status(400).json(e.message);
    }
});
module.exports = router;