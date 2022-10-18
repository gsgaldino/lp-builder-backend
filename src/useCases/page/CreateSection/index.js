const PageRepository = require('../../../repositories/PageRepository');
const CreateSectionUseCase = require('./CreateSectionUseCase');

const CreateSectionController = require('./CreateSectionController');

const pageRepository = new PageRepository();

const createSectionUseCase = new CreateSectionUseCase({ pageRepository });

const createSectionController = new CreateSectionController({ createSectionUseCase });

module.exports = { createSectionUseCase, createSectionController };
