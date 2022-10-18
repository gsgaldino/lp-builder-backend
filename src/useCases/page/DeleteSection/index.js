const DeleteSectionUseCase = require('./DeleteSectionUseCase');
const DeleteSectionController = require('./DeleteSectionController');

const PageRepository = require('../../../repositories/PageRepository');

const pageRepository = new PageRepository();

const deleteSectionUseCase = new DeleteSectionUseCase({ pageRepository });

const deleteSectionController = new DeleteSectionController({ deleteSectionUseCase });

module.exports = { deleteSectionUseCase, deleteSectionController };
