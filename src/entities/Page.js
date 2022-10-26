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
        height: {
          type: String,
          default: 'auto',
        },
        padding: {
          type: String,
          default: 0,
        },
        margin: {
          type: String,
          default: 0,
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
        tag: {
          type: String,
          enum: ['p', 'h1, h2', 'h3', 'h4', 'h5', 'h6', 'span', 'label', 'img'],
        },
        text: {
          type: String,
        },
        src: {
          type: String,
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
