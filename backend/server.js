const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/index');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

  
const uri = process.env.ATLAS_URI;
console.log('uri',uri)
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);    
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
   


app.use(cors());
app.use(express.json());

//route section
app.use('/exercises',routes.exercises)
app.use('/users',routes.users)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});