
const {Category} = require('../../models/index');
const router = require('express').Router();

router.get('/', async (req, res) => {

    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (e) {
        console.log("---> e :" + e);
        res.status(400).json(e);

    }

});
router.get('/:category_name', async (req, res) => {

    try {
        const categories = await Category.findOne({where: {category_name: req.params.category_name}});
        res.status(200).json(categories);
    } catch (e) {
        console.log("---> e :" + e);
        res.status(400).json(e);

    }

});

router.post('/', async (req, res) => {
         console.log("---> try :" + req.body.category_name);
    try  {
        const newCategory = await Category.create({category_name:req.body.category_name});
        res.status(200).json(newCategory);
    } catch (e) {
        console.log("---> e :" + e);
        res.status(400).json(e);
    }


});


module.exports = router;