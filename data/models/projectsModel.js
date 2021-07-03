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
  const data = await db("projects").where("project_id", id);
  if (data) {
    return { ...data };
  } else {
    console.log(`findById did not find any data with id: ${id}`);
  }
};

const addNewProject = async (newItem) => {
  const newItem = await db
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
  return findById(newItem.project_id);
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
