class GetByIdUseCase {
  constructor({ pageRepository }) {
    this.pageRepository = pageRepository;
  }

  async execute({ pageId }) {
    const page = await this.pageRepository.getById({ pageId });
    return page;
  }
}

module.exports = GetByIdUseCase;
