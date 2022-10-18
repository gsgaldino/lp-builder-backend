const PageRepository = require('../../../repositories/PageRepository');
const CreatePageController = require('./CreatePageController');
const CreatePageUseCase = require('./CreatePageUseCase');

const pageRepository = new PageRepository();

const createPageUseCase = new CreatePageUseCase({ pageRepository });

const createPageController = new CreatePageController({ createPageUseCase });

module.exports = { createPageController };
