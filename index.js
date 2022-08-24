const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');
const filmRouter = require('./routes/filmRouter');

const app = express();

dotenv.config();

// connect mongoose
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('connect mongoose success');
});

app.use(cors());
app.use(express.json());

// router
app.use('/v1/auth', authRouter);
app.use('/v1/user', userRouter);
app.use('/v1/film', filmRouter);

app.listen(process.env.PORT_START, () => {
    console.log('server listening!!!');
});
