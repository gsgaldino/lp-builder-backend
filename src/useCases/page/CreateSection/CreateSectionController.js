class CreateSectionController {
  constructor({ createSectionUseCase }) {
    this.createSectionUseCase = createSectionUseCase;
  }

  async handle(req, res) {
    const { pageId } = req.params;

    try {
      const page = await this.createSectionUseCase.execute({ pageId });

      res.json({
        success: true,
        page,
      });
    } catch (error) {
      console.log('ERROR', error);
      res.json({
        success: false,
        message: 'Houve um erro ao adicionar a seção',
      });
    }
  }
}

module.exports = CreateSectionController;
