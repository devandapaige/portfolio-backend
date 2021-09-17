const express = require("express");
const projectModel = require("../models/projectsModel");
// Project Models:
// findAll | findByID | addNewProject | updateProject | deleteProject

const { checkId } = require("../middleware/projectMiddleware");
// Middleware: checkId

// Declare Router:
const router = express.Router();

// [GET] all projects tested and passed
router.get("/", async (req, res, next) => {
  try {
    res.json(await projectModel.findAll());
  } catch (err) {
    next(err);
  }
});

// [GET] project by ID
// 💢 Returning a empty object as a 200 code, when it shouldn't. There seems to be an issue with the sql selection where "project_id" = ? and not "project_id" = req.params.id.
router.get("/:id", async (req, res, next) => {
  try {
    res.json(await projectModel.findById(req.params.id));
  } catch (err) {
    next(err);
  }
});

// [POST] new project
// project_id, title, photo_src, description, link, repo
router.post("/", async (req, res, next) => {
  try {
    const { project_id, title, photo_src, description, link, repo } = req.body;
    const newProj = await projectModel.addNewProject({
      project_id,
      title,
      photo_src,
      description,
      link,
      repo,
    });
    res.status(201).json({
      message: `New Project ${newProj.title}, was successfully added`,
    });
  } catch (err) {
    next(err);
  }
});

// [PUT] edit new project
router.put("/:id", checkId, async (req, res, next) => {
  try {
    const { project_id, title, photo_src, description, link, repo } = req.body;
    const updatedProj = await projectModel.updateProject({
      project_id,
      title,
      photo_src,
      description,
      link,
      repo,
    });
    res.json(updatedProj);
  } catch (err) {
    next(err);
  }
});

// [DELETE] project by ID
router.delete("/:id", checkId, async (req, res, next) => {
  try {
    const proj = await projectModel.nuke(req.params.id);
    res.json({
      message: `${proj.title} was nuked`,
    });
  } catch (err) {
    next(err);
  }
});

//export Router
module.exports = router;
