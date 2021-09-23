const express = require('express');
const cors = require('cors');
const businessRoute = require('./routes/business');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
dotenv.config();

try {
    mongoose.connect(process.env.MONGO_URI,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongo DB is connected")
    )
} catch (error) {
    console.log(error);
}

app.use(cors());
app.use(express.json());
app.use('/api',businessRoute);

const PORT = process.env.PORT || 6000;
app.listen(PORT,() => {
    console.log(`app is running at port ${PORT}`)
});