//checkId - projects
const Projects = require("../models/projectsModel");

const checkId = async (req, res, next) => {
  try {
    const projById = await Projects.findById(req.params.id);
    if (!projById) {
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
