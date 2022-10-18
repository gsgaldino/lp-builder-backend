class CreatePageController {
  constructor({ createPageUseCase }) {
    this.createPageUseCase = createPageUseCase;
  }

  async handle(req, res) {
    const { user } = req.body;

    try {
      const page = await this.createPageUseCase.execute({ user });
      res.json({
        success: true,
        page,
      });
    } catch (error) {
      res.json({
        success: false,
      });
    }
  }
}

module.exports = CreatePageController;
