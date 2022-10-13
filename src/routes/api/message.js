const { getMessage, postMessage } = require("../../controllers/messageController");

const router = require("express").Router();

router.get("/", getMessage);
router.post("/", postMessage);

module.exports = router;
