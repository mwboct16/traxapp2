const router = require("express").Router();
const personsController = require("../../controllers/personsController");

router.route("/")
    .post(personsController.create);

router
    .route("/:id")
    .get(personsController.findById)
    .put(personsController.update)
    .delete(personsController.remove);

module.exports = router;

