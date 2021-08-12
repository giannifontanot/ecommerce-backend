const express = require('express');
const routes = require('./routes/index');
const {sequelize} = require('./models/index');



const app = express();
const PORT = process.env.PORT || 3000;

// Define the middleware that gets into the server
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);


// main function

run = async () => {
    await app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
}

// RUN FOREST, RUN!!!
run();
