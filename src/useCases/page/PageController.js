const { createPageController } = require('./CreatePage');
const { getByIdController } = require('./GetById');
const { createSectionController } = require('./CreateSection');
const { deleteSectionController } = require('./DeleteSection');
const { createElementController } = require('./CreateElement');

module.exports = {
  createPageController,
  getByIdController,
  createSectionController,
  deleteSectionController,
  createElementController,
};
