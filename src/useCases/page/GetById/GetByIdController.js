class GetByIdController {
  constructor({ getByIdUseCase }) {
    this.getByIdUseCase = getByIdUseCase;
  }

  async handle(req, res) {
    const { pageId } = req.params;
    try {
      const page = await this.getByIdUseCase.execute({ pageId });
      res.json({
        success: true,
        page,
      });
    } catch (error) {
      res.json({ success: false });
    }
  }
}

module.exports = GetByIdController;
