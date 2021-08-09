const express = require('express');


const app = express();
const PORT = process.env.PORT || 3000;
const {sequelize} = require('./models/index');

// Define the middleware that gets into the server
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);


// RUN FOREST, RUN!!!
sequelize.sync({force: true}).then(r => {

    return seed.seedAll();
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

}).then(() => {


});
