const express = require('express')
const next = require('next')

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const db = require("./models");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== "production"; //true false
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); //part of next config

mongoose.Promis = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/oneAppDB"
);

nextApp.prepare().then(() => {
  // express code here
  const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    
    // api routes
    // app.unsubscribe(routes);



    // app.use('/api/photos', require('./routes/index'))
    // app.get('*', (req, res) => {
    //     return handle(req, res) // for all the react stuff
    // })

    app.listen(PORT, err => {
        if (err) throw err;
        console.log(`ready at http://localhost:${PORT}`)
    })

});
