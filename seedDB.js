// Sequelize modules required
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

// Connection to the database
const sequelize = require('../config/connection');

// Verify the connection to the database
sequelize.authenticate()
    .then(() => console.log('Connection established successfully'))
    .catch(err => console.error('Unable to connect to database.', err));

// Define the function to export for the server to use when starting
exports.seedAll = async () => {
    await sequelize.sync({force: true});

    await seedCategories();

    await seedProducts();

    await seedTags();

    await seedProductTags();

};
