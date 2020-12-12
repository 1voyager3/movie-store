const express = require('express');
require('dotenv').config();
require('colors');
const connectDB = require('./config/db');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const cors = require('cors');

// @desc initialization
const app = express();
connectDB();
const PORT = process.env.PORT;

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(PORT, err => {
    err ? console.log(err) : console.log(`Server is running on port ${ PORT }...`.brightBlue);
});

