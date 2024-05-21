const express = require('express');
const peopleRouter = require('./src/routers/people.router');
const productRouter = require('./src/routers/product.router');
const authorRouter = require('./src/routers/author.router');
require('dotenv').config();
const corsConfig = require('./src/config/cors.config')
const cors = require('cors');






const app = express();
const port =  process.env.PORT || 8084;

corsConfig(app);
app.use(cors());

app.use('/api/people', peopleRouter);
app.use('/api/product', productRouter);
app.use('/api/author', authorRouter);





app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

