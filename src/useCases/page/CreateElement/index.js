const CreateElementController = require('./CreateElementController');
const CreateElementUsecase = require('./CreateElementUseCase');

const PageRepository = require('../../../repositories/PageRepository');

const pageRepository = new PageRepository();

const createElementUseCase = new CreateElementUsecase({ pageRepository });

const createElementController = new CreateElementController({ createElementUseCase });

module.exports = { createElementController, createElementUseCase };
