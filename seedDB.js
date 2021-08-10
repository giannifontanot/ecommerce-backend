// Sequelize modules required
const seedCategories = require('./seeds/category-seeds');
const seedProducts = require('./seeds/product-seeds');
const seedTags = require('./seeds/tag-seeds');
const seedProductTags = require('./seeds/product-tag-seeds');


// Define the function to export for the server to use when starting
seedAll = async () => {

    await seedCategories();

    await seedProducts();

    await seedTags();

    await seedProductTags();

};

// RUN FOREST, RUN!!
seedAll();