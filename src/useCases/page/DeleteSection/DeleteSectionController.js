class DeleteSectionController {
  constructor({ deleteSectionUseCase }) {
    this.deleteSectionUseCase = deleteSectionUseCase;
  }

  async handle(req, res) {
    const { pageId, sectionId } = req.params;

    try {
      const deleted = await this.deleteSectionUseCase.execute({
        pageId,
        sectionId,
      });

      res.json({
        success: true,
        deleted,
      });
    } catch (error) {
      console.log('ERROR', error);
      res.json({
        success: false,
        message: 'Houve um erro ao deletar a seção.',
      });
    }
  }
}

module.exports = DeleteSectionController;
