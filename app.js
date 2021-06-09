const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

require('dotenv/config');
app.use(cors())
app.use(bodyParser.json());
const adminRoute = require('./routes/admin');
app.use('/addmin', adminRoute);
const customerRoute = require('./routes/customer');
app.use('/customer', customerRoute);
const buyerRoute = require('./routes/buyer');
app.use('/buyer', buyerRoute);
mongoose.connect('mongodb://localhost/fil_rouge', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(console.log('connected'))
.catch(err=>{
  console.log(err);
})

app.listen(4000);