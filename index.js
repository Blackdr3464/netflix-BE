const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRouter');

const app = express();

dotenv.config();

// connect mongoose
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('connect mongoose success');
});

app.use(express.json());

// router
app.use('/v1/auth', authRouter);

app.listen(process.env.PORT_START, () => {
    console.log('server listening!!!');
});
