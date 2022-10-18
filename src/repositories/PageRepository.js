const { Page } = require('../entities');

class PageRepository {
  async save({ user }) {
    const page = new Page({
      _user: user,
    });

    const saved = await page.save();
    return saved;
  }

  async getById({ pageId }) {
    const page = await Page.findById(pageId);
    return page;
  }

  async addSection({ pageId }) {
    const page = await Page.findOneAndUpdate(
      { _id: pageId },
      {
        $push: {
          'body.items': { css: { background: 'red' } },
        },
      },
      { new: true },
    );

    return page;
  }

  async deleteSection({ pageId, sectionId }) {
    const page = await Page.findOneAndUpdate(
      { _id: pageId },
      {
        $pull: { 'body.items': { _id: sectionId } },
      },
      { new: true },
    );

    return page;
  }

  async createElement({ pageId, sectionId, element }) {
    const page = await Page.findOneAndUpdate(
      { _id: pageId },
      {
        $push: {
          'body.items.$[section].elements': element,
        },
      },
      {
        arrayFilters: [
          {
            'section._id': sectionId,
          },
        ],
        new: true,
      },
    );

    return page;
  }
}

module.exports = PageRepository;
