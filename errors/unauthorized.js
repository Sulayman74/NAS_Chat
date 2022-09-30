const { StatusCodes } = require("http-status-codes");
const CustomError = require("./custom-api");

class UnauthorizeError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

module.exports = UnauthorizeError;
