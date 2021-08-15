const {Product, ProductTag, Category, Tag} = require('../../models/index');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const result = await Product.findAll({include: [{model: Tag}]});
        res.status(200).json(result);
    } catch (e) {
        console.log("---> exception: " + e.message + ". " + __filename);
        res.status(500).send(e.message);
    }

});

router.get('/:product_name', async (req, res) => {
    try {
        const result = await Product.findOne({where: {product_name: req.params.product_name}});
        res.status(200).json(result);
    } catch (e) {
        console.log("---> exception: " + e.message + ". " + __filename);
        res.status(500).send(e.message);
    }

});
// We create one register in Product and all registers needed in ProductTag
router.post('/', async (req, res) => {
    try {
        // Create a new product and get a Product Object back
        const resultProduct = await Product.create({
            product_name: req.body.product_name,
            price: req.body.price,
            stock: req.body.stock,
            category_id: req.body.category_id
        });

        // Find all the tags that came in the request object
        // and create an array of object literals
        // having a product_id - tag relationship
        // where product_id is a fixed number.
        if (req.body.tag_id.length) {

            const ProductTagArr = req.body.tag_id.map((element) => {
                return {
                    product_id: resultProduct.product_id,
                    tag_id: element,
                };
            });

            // Create into ProductTag those values in the array.
            const resultProductTag = await ProductTag.bulkCreate(ProductTagArr);
            res.status(200).json(resultProductTag);
        } else {
            res.status(200).json(resultProduct);
        }

    } catch (e) {
        console.log("---> exception: " + e.message + ". " + __filename);
        res.status(400).json(e.message);
    }
});

// UPDATE
router.put('/:product_id', async (req, res) => {
    try {
        // Update product data
        const result = await Product.update({
            product_name: req.body.product_name,
            price: req.body.price,
            stock: req.body.stock,
            category_id: req.body.category_id
        }, {
            where: {product_id: req.params.product_id}
        });

        //  Actual ProductTags from that product in the database
        const actualProductTagsObjectLiteralArr = await ProductTag.findAll({where: {product_id: req.body.product_id}});

        // Actual array of Tags from that product
        const actualTagsArr = actualProductTagsObjectLiteralArr.map(({tag_id}) => {
            return tag_id = {tag_id};
        });
        console.log("---> actualTagsArr :" + JSON.stringify(actualTagsArr));


        res.status(200).json(result);
    } catch (e) {
        console.log("---> exception: " + e.message + ". " + __filename);
        res.status(400).json(e.message);
    }
});

router.delete('/:product_id', async (req, res) => {

    try {
        const result = await Product.destroy({where: {product_id: req.params.product_id}});
        res.status(200).json(result);
    } catch (e) {
        console.log("---> exception: " + e.message + ". " + __filename);
        res.status(500).send(e.message);

    }
});

module.exports = router;