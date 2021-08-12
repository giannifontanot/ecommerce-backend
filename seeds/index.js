const sequelize = require('../config/connection');
const {Category, Product, ProductTag, Tag} = require('../models/index');

const seedsCategory = require('./category-seeds.json');
const seedsProduct = require('./product-seeds.json');
const seedsTag = require('./tag-seeds.json');
const seedsProductTag = require('./product-tag-seeds.json');


const seedAll = async () => {
    await sequelize.sync({force: true});
    const numCategorySeedsPlanted = await Category.bulkCreate(seedsCategory);
    console.log("---> numCategorySeedsPlanted :" +  JSON.stringify(numCategorySeedsPlanted));

    const numProductSeedsPlanted = await Product.bulkCreate(seedsProduct);
    console.log("---> numProductSeedsPlanted :" + JSON.stringify(numProductSeedsPlanted));

    const numberTagSeedsPlanted = await Tag.bulkCreate(seedsTag);
    console.log("---> numberTagSeedsPlanted :" + JSON.stringify(numberTagSeedsPlanted));

    const numberProductTagSeedsPlanted = await ProductTag.bulkCreate(seedsProductTag);
    console.log("---> numberProductTagSeedsPlanted :" + JSON.stringify(numberProductTagSeedsPlanted));

    process.exit(0);
}

module.exports = seedAll;
