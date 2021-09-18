const express = require("express");
const projectModel = require("../models/projectsModel");
// Project Models:
// findAll | findByID | addNewProject | updateProject | deleteProject

const { checkId } = require("../middleware/projectMiddleware");
// Middleware: checkId

// Declare Router:
const router = express.Router();

// [GET] all projects
// ✅ tested and working
router.get("/", async (req, res, next) => {
  try {
    res.json(await projectModel.findAll());
  } catch (err) {
    next(err);
  }
});

// [GET] project by ID
// ✅ tested and working
router.get("/:id", checkId, async (req, res, next) => {
  try {
    res.json(await projectModel.findById(req.params.id));
  } catch (err) {
    next(err);
  }
});

// [POST] new project
// ✅ tested and working
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
      message: `New Project "${req.body.title}", was successfully added`,
    });
  } catch (err) {
    next(err);
  }
});

// [PUT] edit new project
// ✅ tested and working
router.put("/:id", checkId, async (req, res, next) => {
  try {
    const { project_id, title, photo_src, description, link, repo } = req.body;
    console.log(req.body);
    const updatedProj = await projectModel.updateProject({
      project_id,
      title,
      photo_src,
      description,
      link,
      repo,
    });
    res.status(201).json({
      message: `${req.body.title} updated.`,
    });
  } catch (err) {
    next(err);
  }
});

// [DELETE] project by ID
// ✅ tested and working
router.delete("/:id", checkId, async (req, res, next) => {
  try {
    const proj = await projectModel.deleteProject(req.params.id);
    res.json({
      message: `${req.body.title} was nuked`,
    });
  } catch (err) {
    next(err);
  }
});

//export Router
module.exports = router;
