// Project Models:
// findAll | findById | addNewProject | updateProject | deleteProject
// project_id, title, photo_src, description, link, repo
const db = require("../db-config");

const findAll = async () => {
  const projects = await db("projects");
  return projects.map((card) => {
    return {
      ...card,
    };
  });
};

const findById = async (id) => {
  const data = await db("projects").where("project_id", id).select("*");
  return data;
};

const addNewProject = async (newItem) => {
  const newProj = await db
    .insert(
      {
        title: newItem.title,
        photo_src: newItem.photo_src,
        description: newItem.description,
        link: newItem.link,
        repo: newItem.repo,
      },
      "project_id"
    )
    .into("projects");
  return findById(newProj.project_id);
};

const updateProject = async (input, id) => {
  const updatedItem = await db("projects").where("id", id).update(input);
  return findById(updatedItem, input.project_id);
};

const deleteProject = async (id) => {
  return await db("projects").where("project_id", id).del();
};

module.exports = {
  findAll,
  findById,
  addNewProject,
  updateProject,
  deleteProject,
};
