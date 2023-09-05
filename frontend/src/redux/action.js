export const addBlogs = (data) => {
  return {
    type: "ADD_BLOGS",
    data,
  };
};

export const deleteBlogs = (id) => {
  return {
    type: "DELETE_BLOGS",
    id,
  };
};
