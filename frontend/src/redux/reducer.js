export const blogOperation = (state = [], action) => {
  switch (action.type) {
    case "ADD_BLOGS":
      if (action.data.title !== "") {
        return [...state, action.data];
      } else {
        return [...state];
      }

    case "DELETE_BLOGS":
      let filterBlogs = state.filter((items) => items.id !== action.id);
      return filterBlogs;

    default:
      return (state = []);
  }
};
