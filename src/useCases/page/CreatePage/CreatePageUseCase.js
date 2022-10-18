class CreatePageUseCase {
  constructor({ pageRepository }) {
    this.pageRepository = pageRepository;
  }

  async execute({ user }) {
    const saved = await this.pageRepository.save({ user });
    return saved;
  }
}

module.exports = CreatePageUseCase;
