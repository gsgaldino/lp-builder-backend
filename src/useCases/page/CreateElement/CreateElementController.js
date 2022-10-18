class CreateElementController {
  constructor({ createElementUseCase }) {
    this.createElementUseCase = createElementUseCase;
  }

  async handle(req, res) {
    const { pageId, sectionId } = req.params;
    const { element } = req.body;

    try {
      const page = await this.createElementUseCase.execute({
        pageId,
        sectionId,
        element,
      });

      res.json({
        success: true,
        page,
      });
    } catch ({ message }) {
      res.status(500).json({
        success: false,
        message,
      });
    }
  }
}

module.exports = CreateElementController;
