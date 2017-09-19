'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const graphqlExpress = require('apollo-server-express').graphqlExpress;

const port = 3001;

exports.start = function() {
  const app = express();
  app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({schema: ''})
  );
  app.listen(port);
}