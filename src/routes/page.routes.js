const routes = require('express').Router();
const {
  createPageController,
  getByIdController,
  createSectionController,
  deleteSectionController,
  createElementController,
} = require('../useCases/page/PageController');

routes
  .post('/', (req, res) => {
    createPageController.handle(req, res);
  })
  .get('/:pageId', (req, res) => {
    getByIdController.handle(req, res);
  })
  .post('/:pageId/section', (req, res) => {
    createSectionController.handle(req, res);
  })
  .delete('/:pageId/section/:sectionId', (req, res) => {
    deleteSectionController.handle(req, res);
  })
  .post('/:pageId/section/:sectionId/element', (req, res) => {
    createElementController.handle(req, res);
  });

module.exports = routes;
