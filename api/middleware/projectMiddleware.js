//checkId - projects
const Projects = require("../models/projectsModel");

const checkId = async (req, res, next) => {
  try {
    const checking = await Projects.findById(req.params.id);
    console.log(checking);
    if (!checking[0]) {
      return res.status(404).json({
        message: `Project ID not found`,
      });
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkId,
};
