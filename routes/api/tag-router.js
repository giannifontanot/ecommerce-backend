const router = require('express').Router();

router.get('/',(req,res)=>{
    res.send("you are in Tag Router");
})




module.exports = router;