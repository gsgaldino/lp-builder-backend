const routes = require('express').Router();
const { createUserController } = require('../useCases/user/UserController');

routes
  .get('/', (req, res) => {
    res.send('yo');
  })
  .post('/', (req, res) => {
    createUserController.handle(req, res);
  });

module.exports = routes;
