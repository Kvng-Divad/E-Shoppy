const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');



mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log('DB Connection Success'))
.catch((err)=> {console.log(err)});


app.use(express.json());

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/user', userRoute)

app.listen(process.env.PORT || 5000, ()=> {
    console.log('Api running')
});