
const toEmail = process.env.TOEMAIL;
const welcome = process.env.WELCOME;

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
module.exports = {
  async create(ctx) {
    
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.product.create(data, { files });
    } else {
      entity = await strapi.services.product.create(ctx.request.body);
    }
    strapi.services.sendmail.send(welcome, toEmail, 'Welcome', `A product has been created ${entity.name}`);
    return sanitizeEntity(entity, { model: strapi.models.product });
  },
};
