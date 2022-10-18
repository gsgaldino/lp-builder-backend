const PageRepository = require('../../../repositories/PageRepository');
const GetByIdUseCase = require('./GetByIdUseCase');
const GetByIdController = require('./GetByIdController');

const pageRepository = new PageRepository();

const getByIdUseCase = new GetByIdUseCase({ pageRepository });

const getByIdController = new GetByIdController({ getByIdUseCase });

module.exports = { getByIdController, getByIdUseCase };
