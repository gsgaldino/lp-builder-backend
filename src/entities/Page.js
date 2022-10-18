const { Schema, model } = require('mongoose');

const PageSchema = Schema({
  _user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  html: {
    lang: {
      type: String,
      default: 'pt-br',
    },
  },
  head: {
    title: {
      type: String,
      default: 'My app',
    },
  },
  body: {
    items: [{
      _id: {
        type: Schema.Types.ObjectId,
        auto: true,
        required: true,
        index: true,
      },
      spaces: {
        type: Number,
        default: 2,
      },
      css: {
        backgroundColor: {
          type: String,
          default: 'none',
        },
      },
      elements: [{
        _id: {
          type: Schema.Types.ObjectId,
          auto: true,
          index: true,
        },
        type: {
          type: String,
          enum: ['Image', 'Video', 'Text', 'Title'],
        },
        index: {
          type: Number,
        },
      }],
    }],
  },
  footer: {
    items: Array,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = model('Page', PageSchema);
