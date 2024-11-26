// app.js

require('dotenv').config();
const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./database/database');


const app = express();
connectDB();
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', indexRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Started Listening at port ${PORT}`);
});
