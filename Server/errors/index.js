const CustomAPIError = require("./custom-api-error");
const UnauthenticatedError = require("./unauthenticated");
const NotFoundError = require("./not-found");
const BadRequestError = require("./bad-request");
const UnauthorizeError = require("./unauthorized");

module.exports = {
  CustomAPIError,
  UnauthenticatedError,
  UnauthorizeError,
  NotFoundError,
  BadRequestError,
};
