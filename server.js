const express = require('express');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Define the middleware that gets into the server
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);


// main function

run = async () => {
    try {
        await app.listen(PORT, () => console.log(` -> App listening on port ${PORT}!`));
    } catch (e) {
        console.log("---> exception: " + e.message + ". " + __filename);
    }
}

// RUN FOREST, RUN!!!
run();
