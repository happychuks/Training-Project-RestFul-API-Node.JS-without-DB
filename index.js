//index.js is where you setup the server

import express from 'express';

import bodyParser from 'body-parser'; //this allows you to get body of post request using Json Type

import usersRoutes from './routes/users.js'; //importing the users route created in the users.js file

const app = express(); //to initialize the express application as a function

const PORT = 4000; //to specify the port number of our application

app.use(bodyParser.json()); //to initialize bodyParse middleware using Json data

app.use('/users', usersRoutes); //to use the users routes middleware in the application

app.get('/', (req, res) => res.send('Hello World!!! Welcome to my first NODE.JS/EXPRESS SERVER!')); //to route to my home page

app.listen(PORT, () => console.log(`Your Server is running on port: http://localhost:${PORT}`)); //to make application listen for incoming requests and also specify the Post to listen on. this is executed once the server is running
