const Joi = require("joi");
const { objectId } = require("./custom.validation");
/**
 * Example url: `/v3/events/:Id`
 * Validate the "Id" url *params* field. "Id" value should be a
 * - string
 * - valid Mongo id -> Use the helper function in src/validations/custom.validation.js
 */
  const getbyid = {
    params: Joi.object().keys({
    id: Joi.string().custom(objectId),
    })
  };
  module.exports={getbyid};