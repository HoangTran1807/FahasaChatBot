const express = require('express');
const peopleRouter = require('./src/routers/people.router');
const productRouter = require('./src/routers/product.router');
const authorRouter = require('./src/routers/author.router');
require('dotenv').config();
const cors = require('cors');


const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}


const app = express();
const port =  process.env.PORT || 8084;

app.use(cors(corsOptions));

app.use('/api/people', peopleRouter);
app.use('/api/product', productRouter);
app.use('/api/author', authorRouter);





app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

