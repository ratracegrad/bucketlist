const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors  = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const config = require('./config/database');
const bucketlist = require('./controllers/bucketlist');

const app = express();

/* connect to database */
mongoose.connect(config.database);

/* configure server  */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* setup static directory */
app.use(express.static(path.join(__dirname, 'public')));

/* setup routes */
app.get('/', (req, res) => {
    res.send("Invalid page");
});
app.use('/bucketlist', bucketlist);


/* start the server */
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});