const router = require("express").Router();
const personsRoutes = require("./persons");

// Book routes
router.use("/user", personsRoutes);

module.exports = router;
