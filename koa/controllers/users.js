const UserModel = require("../models/User");
exports.getUser = (ctx) => {
  try {
    const user = UserModel.get();
    ctx.status = 200;
    ctx.body = { statuscode: "GET Success", user: user };
  } catch (error) {
    console.log("error", error);
    ctx.status = 400;
    ctx.body = { statuscode: "failed" };
  }
};
exports.postUser = (ctx) => {
  try {
    const user = UserModel.get();
    ctx.status = 200;
    ctx.body = { statuscode: "POST Success", user: user };
  } catch (error) {
    console.log("error", error);
    ctx.status = 400;
    ctx.body = { statuscode: "failed" };
  }
};
