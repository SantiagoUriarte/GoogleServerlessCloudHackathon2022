class ApiResponse {
  constructor(res) {
    this.res = res;
  }

  static jsonResponse(res, statusCode, message, data) {
    let response = {
      statusCode,
      message,
    };

    if (data.length > 0) {
      response = {
        ...response,
        data,
      };
    }

    return res.status(statusCode).json(response);
  }

  success200(message, data = []) {
    return ApiResponse.jsonResponse(this.res, 200, message, data);
  }

  successNoContent202(message, data = []) {
    return ApiResponse.jsonResponse(this.res, 202, message, data);
  }

  badRequest400(message, data = []) {
    return ApiResponse.jsonResponse(this.res, 400, message, data);
  }

  notFound404(message, data = []) {
    return ApiResponse.jsonResponse(this.res, 404, message, data);
  }

  serverError500(message, data = []) {
    return ApiResponse.jsonResponse(this.res, 500, message, data);
  }
}

module.exports = ApiResponse;
