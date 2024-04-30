
const errorResponseHandler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    const {
      status,
      title = null,
      request = {},
      statusText = null,
      message,
    } = err.response ? err.response : err;
    const instance =
      request && request.path !== undefined ? request.path : ctx.originalUrl;

    switch (status) {
      case 400:
        ctx.response.status = 400;
        ctx.body = {
          title: message,
          instance,
        };
        break;
      case 401:
        ctx.response.status = 401;
        ctx.body = {
          title: title || statusText || "Authentication Failed",
          instance,
        };
        break;
      case 403:
        ctx.response.status = 403;
        ctx.body = {
          title: message || title,
          instance,
        };
        break;
      case 404:
        ctx.response.status = 404;
        ctx.body = {
          title: title || statusText,
          instance,
        };
        break;
      case 409:
        ctx.response.status = 409;
        ctx.body = {
          title: title || statusText,
          instance,
        };
        break;
      case 422:
        ctx.response.status = 422;
        ctx.body = {
          title: message || "Something went wrong.",
          instance,
        };
        break;
      default:
        const errorTitle =
          title ||
          statusText ||
          (err.source !== undefined
            ? `${err.source} Internal Error`
            : "Internal Error");
        ctx.response.status = status || 500;
        ctx.body = {
          title: errorTitle,
          instance,
        };
    }
  }
};

module.exports = {
  errorResponseHandler,
};
