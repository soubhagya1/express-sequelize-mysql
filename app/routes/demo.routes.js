module.exports = app => {
    const demo = require("../controllers/demo.controller.js");
    var router = require("express").Router();
    // Create a new Demo
    router.post("/", demo.create);
    // Retrieve all Demo
    router.get("/", demo.findAll);
    // Retrieve all published Demo
    router.get("/published", demo.findAllPublished);
    // Retrieve a single Demo with id
    router.get("/:id", demo.findOne);
    // Update a Demo with id
    router.put("/:id", demo.update);
    // Delete a Demo with id
    router.delete("/:id", demo.delete);
    // Delete all Demo
    router.delete("/", demo.deleteAll);
    app.use('/api/demo', router);
}