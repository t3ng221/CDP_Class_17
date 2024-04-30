const Router = require("koa-router");
const { getUser, postUser, getAccount } = require("./controllers/users");
const router = new Router();

router.post("/users", postUser);
router.get("/users", getUser);
router.get("/users/:id", getAccount);

module.exports = router;
