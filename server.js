const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Configure Server
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Set up mongoose
mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING,
    {
        useNewUrlParser: true,
    },
    (err) => {
        if (err) throw err;
        console.log('Database Connected');
    }
);

app.use('/user', require('./routes/userRouter'));

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
