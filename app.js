// Import Express
const express = require('express');

// Initialize the Express app
const app = express();

//Importing router

const orderRouter= require('./routes/orders')

const userRouter=require('./routes/users')


// Define routes

//Integrating order router
app.use('/orders', orderRouter);

//Integrating user router
app.use('/users', userRouter);


  
// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
