const {Category,Product} = require('../../models/index');
const router = require('express').Router();

router.get('/', async (req, res) => {

    try {
        const categories = await Category.findAll({include:[{model:Product}]});
        res.status(200).json(categories);
    } catch (e) {
        console.log("---> exception: " + e.message + ". " + __filename);
        res.status(400).json(e);

    }

});
router.get('/:category_name', async (req, res) => {

    try {
        const categories = await Category.findOne({where: {category_name: req.params.category_name}});
        res.status(200).json(categories);
    } catch (e) {
        console.log("---> exception: " + e.message + ". " + __filename);
        res.status(400).json(e);

    }

});

router.post('/', async (req, res) => {
    console.log("---> try :" + req.body.category_name);
    try {
        const newCategory = await Category.create({category_name: req.body.category_name});
        res.status(200).json(newCategory);
    } catch (e) {
        console.log("---> exception: " + e.message + ". " + __filename);
        res.status(400).json(e);
    }
});

router.put('/:category_id', async (req, res) => {

    console.log("---> req.params.category_id :" + req.params.category_id);
    console.log("---> req.body.category_name :" + req.body.category_name);
    try {
        const result = await Category.update({
                category_name: req.body.category_name
            },
            {
                where: {
                    category_id: req.params.category_id
                }
            });
        res.status(200).json(result);
    } catch (e) {
        console.log("---> exception: " + e.message + ". " + __filename);
        res.status(400).json(e);
    }
});

router.delete('/:category_id', async (req, res) => {
    try {
        const result = await Category.destroy({
            where: {
                category_id: req.params.category_id
            }
        });

        res.status(200).json(result);
    } catch (e) {
        console.log("---> exception: " + e.message + ". " + __filename);
        res.status(400).json(e);
    }

});

module.exports = router;










































