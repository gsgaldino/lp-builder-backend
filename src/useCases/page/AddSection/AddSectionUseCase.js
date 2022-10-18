class CreateSection {
  constructor({ pageRepository }) {
    this.pageRepository = pageRepository;
  }

  async execute({ pageId }) {
    const page = await this.pageRepository.addSection({ pageId });

    if (!page) throw new Error('Página não encontrada.');

    return page;
  }
}

module.exports = CreateSection;
