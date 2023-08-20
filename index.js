const app = require('./app');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const colors = require('colors');
const mongoose = require('mongoose');

// Database URL
const dbURL =  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.lpsfjtz.mongodb.net/?retryWrites=true&w=majority`; // mongodb atlas cloude db url

// Connect to the database asynchronously
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connection successfull ✔'.blue.bold);
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });



app.listen(port, () => {
    console.log(`App is running on ${port}`.yellow.bold, `http://localhost:${port}`);
});
