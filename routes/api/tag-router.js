const {Tag} = require('../../models/index');
const router = require('express').Router();

router.get('/', async (req, res) => {

    try {
        const tags = await Tag.findAll();
        res.status(200).json(tags);
    } catch (e) {
        console.log("---> e :" + e);

    }

});

router.get('/:tag_name', async (req, res) => {
    try {
        const tag = await Tag.findOne({where: {tag_name: req.params.tag_name}});
        console.log("---> req.params.tag_name :" + req.params.tag_name);
        res.status(200).json(tag);
    } catch (e) {
        res.status(400).json({message: e.message});
    }
});


router.post('/', async (req, res) => {
    try {
    const newTag = await Tag.create({tag_name:req.body.tag_name});
        res.status(201).json(newTag);
    } catch ( e ) {
         console.log("---> e :" + e );
        res.status(400).json({message: e.message});
    }
});

module.exports = router;