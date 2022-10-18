const { User } = require('../entities');

class UserRepository {
  async save({ name, email }) {
    const user = new User({ name, email });
    const saved = await user.save();
    return saved;
  }

  async getByEmail({ email }) {
    const user = await User.findOne({ email });
    return user;
  }
}

module.exports = UserRepository;
