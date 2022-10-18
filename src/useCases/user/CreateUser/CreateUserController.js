class CreateUserController {
  constructor({ createUserUseCase }) {
    this.createUserUseCase = createUserUseCase;
  }

  async handle(req, res) {
    const { name, email } = req.body;
    try {
      const saved = await this.createUserUseCase.execute({ name, email });

      res.json(saved);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Unexpected error',
      });
    }
  }
}

module.exports = CreateUserController;
