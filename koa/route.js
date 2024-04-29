const Router = require("koa-router");
const { getUser, postUser } = require("./controllers/users");
const router = new Router();

router.post("/users", postUser);
router.get("/users", getUser);

module.exports = router;
