const express = require('express');
const morgan = require('morgan')

const customerRouter = require('./routes')

const app = express();

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//middleware
app.use(express.json());
//app.use(express.static(`${__dirname}/./public`))
app.use(express.static(`${__dirname}/../tamistore/public`))

app.use((req, res, next) => {
    console.log('Middleware here 👋');
    next()
})
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next()
})

//ROUTE
app.use('/api/v1/customers', customerRouter);

module.exports = app;