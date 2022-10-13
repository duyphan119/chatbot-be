const router = require("express").Router();
const messageRouter = require("./message");

router.use("/message", messageRouter);

module.exports = router;
