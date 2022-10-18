class CreateElementUseCase {
  constructor({ pageRepository }) {
    this.pageRepository = pageRepository;
  }

  async execute({ pageId, sectionId, element }) {
    const page = await this.pageRepository.createElement({
      pageId,
      sectionId,
      element,
    });

    if (!page) throw new Error('Página não encontrada');

    return page;
  }
}

module.exports = CreateElementUseCase;
