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

app.listen(3000, () => {
    console.log("Started Listening at port 3000");
});

