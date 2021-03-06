const router = require('express').Router();
const categoryRouter = require('./category-router');
const productRouter = require('./product-router');
const tagRouter = require('./tag-router');

router.use('/product', productRouter);
router.use('/category', categoryRouter);
router.use('/tag', tagRouter);
module.exports = router;

