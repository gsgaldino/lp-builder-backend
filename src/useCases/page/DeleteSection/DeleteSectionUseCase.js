class DeleteSectionUseCase {
  constructor({ pageRepository }) {
    this.pageRepository = pageRepository;
  }

  async execute({ pageId, sectionId }) {
    const page = await this.pageRepository.getById({ pageId });

    if (!page) throw new Error('Página não encontrada.');

    const deleted = await this.pageRepository.deleteSection({
      pageId,
      sectionId,
    });

    return deleted;
  }
}

module.exports = DeleteSectionUseCase;
