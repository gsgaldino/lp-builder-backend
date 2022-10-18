const mongoose = require('mongoose');

class Database {
  constructor() {
    this.url = process.env.MONGO_URL;
  }

  connect() {
    mongoose.connect(this.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

module.exports = new Database();
