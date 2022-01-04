const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { Slug } = ctx.params;

    const entity = await strapi.services.projects.findOne({ Slug });
    return sanitizeEntity(entity, { model: strapi.models.projects });
  },
};
 