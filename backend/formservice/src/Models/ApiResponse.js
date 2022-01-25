class ApiResponse {
  constructor(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = {};
  }

  asJson() {
    return {
      statusCode: this.statusCode,
      message: this.message,
      data: this.data,
    };
  }
}

module.exports = ApiResponse;
