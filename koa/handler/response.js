const responseHandler = () => {
  return async (ctx, next) => {
    ctx.response.ok = (message, data = {}) => {
      ctx.status = 200;
      ctx.body = { message, data };
    };

    ctx.response.created = (message, data = {}) => {
      ctx.status = 201;
      ctx.body = { message, data };
    };
    ctx.response.accepted = (message, data = {}) => {
      ctx.status = 202;
      ctx.body = { message, data };
    };
    ctx.response.noContent = (message, data = {}) => {
      ctx.status = 204;
      ctx.body = { message, data };
    };

    ctx.response.badRequest = (message, data = {}) => {
      ctx.status = 400;
      ctx.body = { message, data };
    };

    ctx.response.unauthorized = (message, data = {}) => {
      ctx.status = 401;
      ctx.body = { message, data };
    };

    ctx.response.forbidden = (message, data = {}) => {
      ctx.status = 403;
      ctx.body = { message, data };
    };

    ctx.response.notFound = (message, data = {}) => {
      ctx.status = 404;
      ctx.body = { message, data };
    };
    ctx.response.requestTimeout = (message, data = {}) => {
      ctx.status = 408;
      ctx.body = { message, data };
    };
    ctx.response.conflict = (message, data = {}) => {
      ctx.status = 409;
      ctx.body = { message, data };
    };

    ctx.response.internalServreError = (message, data = {}) => {
      ctx.status = 500;
      ctx.body = { message, data };
    };
    ctx.response.notImplemented = (message, data = {}) => {
      ctx.status = 501;
      ctx.body = { message, data };
    };
    ctx.response.badGateway = (message, data = {}) => {
      ctx.status = 502;
      ctx.body = { message, data };
    };

    ctx.response.serviceUnavailable = (message, data = {}) => {
      ctx.status = 503;
      ctx.body = { message, data };
    };

    ctx.response.gatewayTimeOut = (message, data = {}) => {
      ctx.status = 504;
      ctx.body = { message, data };
    };
    await next();
  };
};

module.exports = responseHandler;
