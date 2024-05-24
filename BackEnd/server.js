const express = require('express');
const peopleRouter = require('./src/routers/people.router');
const productRouter = require('./src/routers/product.router');
const authorRouter = require('./src/routers/author.router');
const authorRouter_v2 = require('./src/routers/v2/author.router');
const productRouter_v2 = require('./src/routers/v2/product.router');
const peopleRouter_v2 = require('./src/routers/v2/people.router');
const discountRouter_v2 = require('./src/routers/v2/discount.router');
const CartRouter = require('./src/routers/v2/Cart.router');
require('dotenv').config();
const cors = require('cors');






const app = express();
app.use(express.json());
const port =  process.env.PORT || 8084;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use('/api/people', peopleRouter);
app.use('/api/product', productRouter);
app.use('/api/author', authorRouter);


app.use('/api/v2/people', peopleRouter_v2);
app.use('/api/v2/product', productRouter_v2);
app.use('/api/v2/author', authorRouter_v2);
app.use('/api/v2/discount', discountRouter_v2);
app.use('/api/v2/cart', CartRouter);




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

