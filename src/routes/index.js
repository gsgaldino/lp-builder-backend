const routes = require('express').Router();

const user = require('./user.routes');
const page = require('./page.routes');

routes.use('/user', user);
routes.use('/page', page);

module.exports = routes;
