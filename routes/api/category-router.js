
const router = require('express').Router();

router.get('/',(req,res)=>{
   req.send('This is the category-router!');
});

module.exports = router;