const Koa = require("koa");
const { koaBody } = require("koa-body");
const router = require("./koa/route");
const responseHandler = require("./koa/handler/response");

const app = new Koa();
app.use(koaBody({ includeUnparsed: true }));
app.use(responseHandler());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
