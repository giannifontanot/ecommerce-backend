const {sequelize} = require('./models/index');

const run = async () => {
    await sequelize.authenticate();
    await sequelize.sync({force: true});
};

run();
