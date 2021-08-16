const sequelize = require('../config/connection');
const {Category, Product, ProductTag, Tag} = require('../models/index');

const seedsCategory = require('./category-seeds.json');
const seedsProduct = require('./product-seeds.json');
const seedsTag = require('./tag-seeds.json');
const seedsProductTag = require('./product-tag-seeds.json');


const sow = async () => {
    try {
        console.log("---> sequelize.sync");
        const numCategorySeedsPlanted = await Category.bulkCreate(seedsCategory);
        console.log("---> numCategorySeedsPlanted");

        const numProductSeedsPlanted = await Product.bulkCreate(seedsProduct);
        console.log("---> numProductSeedsPlanted");

        const numberTagSeedsPlanted = await Tag.bulkCreate(seedsTag);
        console.log("---> numberTagSeedsPlanted");

        const numberProductTagSeedsPlanted = await ProductTag.bulkCreate(seedsProductTag);
        console.log("---> numberProductTagSeedsPlanted");

        console.log("---> Field planted.");

        process.exit(0);
    } catch (e) {
        console.log("---> exception: " + e.message + ". " + __filename);
    }

}

// Insert new registers in e-commerce_db
sow();
