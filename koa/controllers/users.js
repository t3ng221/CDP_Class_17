const UserModel = require("../models/User");
exports.getUser = (ctx) => {
  try {
    const user = UserModel.get();
    const id = ctx.params.id;
    ctx.response.ok("user fetched successfully", { ...user });
  } catch (error) {
    console.log("error", error);
    ctx.status = 400;
    ctx.body = { statuscode: "failed" };
  }
};
exports.getAccount = (ctx) => {
  try {
    const user = UserModel.get();
    const id = ctx.params.id;
    ctx.response.ok("user fetched successfully", { ...user, id });
  } catch (error) {
    console.log("error", error);
    ctx.status = 400;
    ctx.body = { statuscode: "failed" };
  }
};
exports.postUser = (ctx) => {
  try {
    const user = UserModel.post();
    const id = ctx.params.id;
    ctx.response.ok("user created successfully", { ...user });
  } catch (error) {
    console.log("error", error);
    ctx.status = 400;
    ctx.body = { statuscode: "failed" };
  }
};
