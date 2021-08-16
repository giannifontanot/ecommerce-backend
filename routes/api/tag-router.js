const {Tag,Product} = require('../../models/index');
const router = require('express').Router();

router.get('/', async (req, res) => {

    try {
        const result = await Tag.findAll({include:[{model:Product}]});
        res.status(200).json(result);
    } catch (e) {
        console.log("---> exception: " + e.message + ". " + __filename);
    }
});

router.get('/:tag_id', async (req, res) => {
    try {
        const result = await Tag.findByPk(req.params.tag_id);
        res.status(200).json(result);
    } catch (e) {
        res.status(400).json({message: e.message});
    }
});


router.post('/', async (req, res) => {
    try {
    const result = await Tag.create({tag_name:req.body.tag_name});
        res.status(201).json(result);
    } catch ( e ) {
         console.log("---> exception: " + e.message + ". " + __filename);
        res.status(400).json({message: e.message});
    }
});

router.put('/:tag_id', async (req, res) => {
    try {
        const result = await Tag.update({
          tag_name:req.body.tag_name
        },{
            where:{
                tag_id:req.params.tag_id
            }
        });
        res.status(201).json(result);
    } catch ( e ) {
        console.log("---> exception: " + e.message + ". " + __filename);
        res.status(400).json({message: e.message});
    }
});

router.delete('/:tag_id',async (req,res)=>{
    try {
        const result=await Tag.destroy({where: {tag_id: req.params.tag_id}});
        res.status(200).json(result);
    } catch ( e ) {
         console.log("---> exception: " + e.message + ". " + __filename );
        res.status(500).json(e.message);
    }
})
module.exports = router;