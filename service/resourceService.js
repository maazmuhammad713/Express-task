const Resources = [
  { id: 1, book: "Maths", task: "derivation", note: "note 1" },
  { id: 2, book: "Physics", task: "kinematics", note: "note 2" },
  { id: 3, book: "Chemistry", task: "stoichiometry", note: "note 3" },
  { id: 4, book: "Biology", task: "cell division", note: "note 4" },
];

module.exports = {
  getResources: () => {
    return Resources;
  },

  getResourceByID: (id) => {
    const resource = Resources.find((c) => c.id === parseInt(id));
    if (!resource) {
      return "The resource with the given ID was not found."; //404
    } else {
      return resource;
    }
  },

  updateResource: (id, data) => {
    const resource = Resources.find((c) => c.id === parseInt(id));
    if (!resource) {
      return "The resource with the given ID was not found."; //404
    } else {
      resource.book = data.book;
      resource.task = data.task;
      resource.note = data.note;
      return resource;
    }
  },
  deleteResource: (id) => {
    const resource = Resources.find((c) => c.id === parseInt(id));
    if (!resource) {
      return "The resource with the given ID was not found."; //404
    } else {
      const index = Resources.indexOf(resource);
      Resources.splice(index, 1);
      return resource;
    }
  },
  addResource: (data) => {
    const resource = {
      id: Resources.length + 1,
      book: data.book,
      task: data.task,
      note: data.note,
    };
    Resources.push(resource);
    return resource;
  },
};
