require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'pug');

const indexRouter = require('./routes/index.router');

app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});