const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');
const filmRouter = require('./routes/filmRouter');

const app = express();

dotenv.config();

const port = process.env.PORT || 8000;
// connect mongoose
mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected db');
        app.listen(port, () => {
            console.log('server listening!!!', port);
        });
    })
    .catch((err) => console.log('Failed to connect', err));

app.use(cors());
app.use(express.json());

// router
app.use('/v1/auth', authRouter);
app.use('/v1/user', userRouter);
app.use('/v1/film', filmRouter);
