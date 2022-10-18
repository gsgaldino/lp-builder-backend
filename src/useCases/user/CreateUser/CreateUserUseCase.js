class CreateUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute({ name, email }) {
    const exists = await this.userRepository.getByEmail({ email });

    if (exists) throw new Error('User already exists');

    const user = await this.userRepository.save({ name, email });

    return user;
  }
}

module.exports = CreateUserUseCase;
